import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Title from "../Title";
import { FaTrash } from "react-icons/fa";

const Users = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
    const handleDelete = () => {
        console.log("object");
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
                            <td> {}</td>
                            <th>
                                <button onClick={() => handleDelete(user._id)} className=" bg-red-600 p-2 text-white rounded-md"><FaTrash></FaTrash></button>
                            </th>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default Users;