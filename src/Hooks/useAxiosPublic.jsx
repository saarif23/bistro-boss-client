import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: "https://bistro-boss-server-rosy-two.vercel.app"
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;