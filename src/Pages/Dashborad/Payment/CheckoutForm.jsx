import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState("")
    const [transactionId, setTransactionId] = useState();
    const { user } = useContext(AuthContext);
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const axiosSecure = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log("payment error", error);
            setError(error.message);
        } else {
            console.log("payment method", paymentMethod);
            setError("");
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.name || "anonymous"
                }
            }
        })
        if (confirmError) {
            console.log("confirmError", confirmError);
        } else {
            console.log("payment  intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                setTransactionId(paymentIntent.id)

                //now saver the data in the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(),
                    transactionId: paymentIntent?.id,
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: "pending"
                }
                console.log(payment);
                const res = await axiosSecure.post("/payments", payment)
                console.log("payment saved", res.data);
                if (res.data?.paymentResult?.insertedId) {
                    toast.success("Payment Successfull")
                    refetch();
                    navigate('/dashboard/paymentHistory')
                }
            }
        }
    }
    return (

        <form onSubmit={handleSubmit} className="text-center ">
            <CardElement
                options={{

                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className="bg-[#D1A054] text-white px-36 py-2 my-5" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600">Your transcation id is :{transactionId}</p>}
        </form>


    );
};

export default CheckoutForm;