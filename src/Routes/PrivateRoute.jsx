import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ImSpinner9 } from "react-icons/im";
import { Navigate, useLocation } from "react-router-dom";
// import useAdmin from "../Hooks/useAdmin";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // const [isAdmin, isPending] = useAdmin();
    // console.log(isAdmin, isPending);

    // if (!isAdmin) {
    //     return <div className="animate-spin flex justify-center items-center min-h-screen text-9xl"><ImSpinner9 /></div>
    // }
    // const token = localStorage.getItem('Access-token')
    // if (!token) {
    //     return <div className="animate-spin flex justify-center items-center min-h-screen text-9xl"><ImSpinner9 /></div>
    // }


    if (loading) {
        return <div className="animate-spin flex justify-center items-center min-h-screen text-9xl"><ImSpinner9 /></div>
    }

    if (user) {
        return children;
    } else {

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;