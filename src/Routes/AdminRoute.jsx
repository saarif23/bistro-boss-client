import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ImSpinner9 } from "react-icons/im";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();
    if (loading || isAdminLoading) {
        return <div className="animate-spin flex justify-center items-center min-h-screen text-9xl"><ImSpinner9 /></div>
    } if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>



};

export default AdminRoute;