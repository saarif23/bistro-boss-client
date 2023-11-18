import { FaTrash } from "react-icons/fa6";
import Title from "../../Components/Title";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Cart = () => {
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    // console.log(cart);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.success("Delete Item  Successfully")
                        }
                        refetch();
                    })
                    .catch(error => console.log(error))
            }
        });
    }
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);



    return (
        <div>
            <Title
                subHeading={"My Cart"}
                heading={'Wanna Add More'}
            ></Title>

            <div className="overflow-x-auto bg-white p-5">
                <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold py-5">Total Bookings {cart.length}</h3>
                    <h3 className="text-3xl font-semibold py-5">Total Price : $ {totalPrice} </h3>
                    <button className="btn btn-sm bg-[#D1A054] text-white">Pay</button>

                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#D1A054] text-white ">
                            <th></th>
                            <th>ITE4M IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {cart.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>{item.name}</p>
                            </td>
                            <td>$ {item.price}</td>
                            <th>
                                <button onClick={() => handleDelete(item._id)} className=" bg-red-600 p-2 text-white rounded-md"><FaTrash></FaTrash></button>
                            </th>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;