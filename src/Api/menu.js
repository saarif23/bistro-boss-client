import { axiosPublic } from "../Hooks/useAxiosPublic"
import { axiosSecure } from "../Hooks/useAxiosSecure"

export const getAllMenuItem = async () => {
    const { data } = await axiosPublic("/menu");
    return data;
}

export const getSingleMenuItem = async (id) => {
    const { data } = await axiosSecure(`/menu/${id}`)
    return data;
}