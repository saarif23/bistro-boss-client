import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    const { data: menu = [], isPending, refetch } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await axiosPublic("/menu");
            return res.data
        }
    })
    return [menu, isPending, refetch]
};

export default useMenu;