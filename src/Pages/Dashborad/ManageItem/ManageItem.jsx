import { FaTrash } from "react-icons/fa";
import Title from "../../../Components/Title";
import useMenu from "../../../Hooks/useMenu";
import { FaRegPenToSquare } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem = (item) => {
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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        // console.log(res.data);

                        if (res.data.deletedCount > 0) {
                            toast.success(`${item.name}Delete Successfully`)
                            refetch();
                        }
                    })
                    .catch(error => console.log(error))
            }
        });
    }

    return (
        <div>
            <Title
                subHeading={"Hurry Up"}
                heading={'Manage All Items'}
            ></Title>

            <div className=" bg-white p-5">
                <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold py-5">Total Bookings {menu.length}</h3>

                </div>
                <table className="table ">
                    {/* head */}
                    <thead className="bg-[#D1A054] ">
                        <tr className="  text-white">
                            <th> #</th>
                            <th>ITE4M IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {menu.map((item, index) => <tr key={item._id}>
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
                                <Link to={`/dashboard/updateItem/${item._id}`}>  <button className="bg-[#D1A054]  p-2 text-white rounded-md"><FaRegPenToSquare /></button></Link>
                            </th>
                            <th>
                                <button onClick={() => handleDeleteItem(item)} className=" bg-red-600 p-2 text-white rounded-md"><FaTrash></FaTrash></button>
                            </th>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItem;