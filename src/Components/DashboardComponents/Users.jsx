import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Title from "../Title";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Users = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data;
        }
    })
    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to admin this user !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            toast.success(`${user?.name} is admin now`)
                        }
                        refetch();
                    })
                    .catch(error => console.log(error))
            }
        });
    }


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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.success("Delete user  Successfully")
                        }
                        refetch();
                    })
                    .catch(error => console.log(error))
            }
        });
    }

    return (
        <div>
            <Title
                subHeading={"How Many ?"}
                heading={'Manage All users'}
            ></Title>

            <div className="overflow-x-auto bg-white p-5">
                <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold py-5">Total Users {users.length}</h3>
                    {/* <h3 className="text-3xl font-semibold py-5">Total Price : $ {'totalPrice'} </h3>
                    <button className="btn btn-sm bg-[#D1A054] text-white">Pay</button> */}

                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#D1A054] text-white ">
                            <th></th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {users.map((user, index) => <tr key={user._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <p>{user.name}</p>
                            </td>
                            <td>
                                <p>{user.email}</p>
                            </td>
                            <td>
                                {/* {user?.role === "user" && <FaUsers></FaUsers>} */}
                                {user.role === 'admin' ? <p className="font-bold text-[#D1A054]">admin</p> : <button onClick={() => handleMakeAdmin(user)} className="bg-[#D1A054] text-white p-2 text-2xl rounded-md"><FaUsers></FaUsers></button>}
                            </td>
                            <th>
                                <button onClick={() => handleDelete(user._id)} className=" bg-red-600 text-2xl p-2 text-white rounded-md"><FaTrash></FaTrash></button>
                            </th>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default Users;