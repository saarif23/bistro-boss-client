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
import AddItems from "../Pages/Dashborad/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashborad/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashborad/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashborad/Payment/Payment";
import PaymentHisroty from "../Pages/Dashborad/PaymentHistroy/PaymentHisroty";
import UserHome from "../Pages/Dashborad/UserHome/UserHome";
import AdminHome from "../Pages/Dashborad/AdminHome/AdminHome";




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
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "paymentHistory",
                element: <PaymentHisroty></PaymentHisroty>
            },

            // Admin route
            {
                path: "adminHome",
                element: <AdminRoute> <AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "addItems",
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: "manageItem",
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path: "updateItem/:id",
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`https://bistro-boss-server-rosy-two.vercel.app/menu/${params.id}`)
            },
            {
                path: "users",
                element: <Users></Users>
            }
        ]
    }
])
export default Routes;