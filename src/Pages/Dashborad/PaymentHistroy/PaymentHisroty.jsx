import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Title";

const PaymentHisroty = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            console.log(res.data);
            return res.data
        }
    })
    // const totalPrice= payments.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <Title
                subHeading={"all payment"}
                heading={'Payment History'}
            ></Title>

            <div className="overflow-x-auto bg-white p-5">
                <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold py-5">Total Payment {payments.length}</h3>
                    {/* <h3 className="text-3xl font-semibold py-5">Total Price : $ {totalPrice} </h3> */}

                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#D1A054] text-white uppercase">
                            <th>Email</th>
                            <th>Payment Id</th>
                            <th>TOTAL price</th>
                            <th>payment date</th>
                            <th>payment date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {payments.map((item) => <tr key={item._id}>
                            <td>
                                {item.email}
                            </td>
                            <td>
                                <p>{item.transactionId}</p>
                            </td>
                            <td>
                                <p>{item.status}</p>
                            </td>
                            <td> {item.date}
                            </td>
                            <td>$ {item.price}
                            </td>

                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div >
    );
};

export default PaymentHisroty;