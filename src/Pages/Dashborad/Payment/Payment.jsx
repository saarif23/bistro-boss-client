import { loadStripe } from "@stripe/stripe-js";
import Title from "../../../Components/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
const Payment = () => {
    return (
        <div className="mt-20" >
            <Title heading={"Payment"} subHeading={'Paymnet here'}></Title>
            <div className="mt-20">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;