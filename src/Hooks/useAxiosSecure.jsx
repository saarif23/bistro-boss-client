import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const { logout } = useContext(AuthContext);
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('Access-token')
        // console.log(token);
        if (token) {
            config.headers.authorization = `Bearer ${token}`
            return config;
        }

    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const status = error.response.status;

        /// 401 and 403  status error user logout 
        if (status === 401 || status === 403) {
            logout();
        }
        // console.log("error in the  interceptor ", status);
        return Promise.reject(error)
    })

    return axiosSecure;
};

export default useAxiosSecure;