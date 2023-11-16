import { FaBook, FaHistory, FaHome, FaList, FaUsers } from "react-icons/fa";
import { FaBookBible, FaCalendar, FaCartShopping, FaShop, FaStreetView } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { MdEmail, MdPayment, MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex ">
            {/* dashboard side bar  */}
            <div className="bg-[#D1A054] min-h-screen w-[250px]">
                <ul className="menu p-5 space-y-3">
                    {isAdmin ?
                        <>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <ImSpoonKnife />
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaList/>
                                    Manage Item
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaBook/>
                                   Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users
                                </NavLink>
                            </li>
                                                 </>
                        :
                        <>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaHome></FaHome>
                                    User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaCalendar></FaCalendar>
                                    Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <MdPayment></MdPayment>
                                    Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaCartShopping></FaCartShopping>
                                    My Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <MdRateReview></MdRateReview>
                                    Add Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaBookBible></FaBookBible>
                                    My Bookings
                                </NavLink>
                            </li>
                        </>}

                    <hr />
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FaList></FaList>
                            Menu
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/">
                            <FaShop></FaShop>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <MdEmail></MdEmail>
                            Contact
                        </NavLink>
                    </li>



                </ul>

            </div>


            {/* dashboard Content */}
            <div className="flex-1 px-10 bg-[#F6F6F6]">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;