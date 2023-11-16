import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashborad/Cart";
import Users from "../Components/DashboardComponents/Users";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/ourShop",
                element: <OurShop></OurShop>
            },
            {
                path: "/ourShop/:category",
                element: <OurShop></OurShop>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>
            },

            // Admin route
            {
                path: "users",
                element: <Users></Users>
            }
        ]
    }
])
export default Routes;