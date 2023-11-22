import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";


const Navbar = () => {
    const [cart] = useCart();
    const { user, logout } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Logout Successfully!')
                navigate("/login")
            })

            .catch(error => console.log(error))
    }
    const navOptions = <div className="flex flex-col lg:flex-row items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="">Contact Us</Link></li>

        {user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>}
        {user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>}

        
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/ourShop">Our Shop</Link></li>

        <li><Link to="/dashboard/cart">
            <div className="flex">
                <span className="text-2xl border border-yellow-400 p-2 rounded-full"> <FaCartShopping /></span> <span className="badge badge-secondary text-xs -ml-2">+{cart.length}</span>
            </div>
        </Link></li>
    </div>

    return (
        <div className="navbar fixed z-10 bg-opacity-25 max-w-6xl  text-white bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boos</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {user
                    ? <>
                        <img className="w-12 rounded-full mx-10 p-1" src={user.photoURL} alt="user" />
                        <p className="cursor-pointer" onClick={handleLogout}>Logout</p>
                    </>
                    : <Link to="/login">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;