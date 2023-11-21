import { useForm } from "react-hook-form";
import Title from "../../../Components/Title";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipi_details,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            if (menuRes.data.insertedId) {
                reset();
                return toast.success("New Recipe Add Successfully")
            }
        }

    }
    return (
        <div>
            <Title
                subHeading={"what's new"}
                heading={'Add an Item'}
            ></Title>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipi Name</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" placeholder="Recipi Name" className="input " required />
                </div>
                <div className="flex gap-10 ">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select {...register("category", { required: true })} defaultValue={'default'} className="select ">
                            <option disabled value='default'>Select a category</option>
                            <option value={"salads"}>Salads</option>
                            <option value={"pizzas"}>Pizzas</option>
                            <option value={"soups"}>Soups</option>
                            <option value={"desserts"}>Desserts</option>
                            <option value={"drinks"}>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Price" className="input " />
                    </div>
                </div>
                <div className="form-control flex-1">
                    <label className="label">
                        <span className="label-text">Recipi Details</span>
                    </label>
                    <textarea {...register("recipi_details", { required: true })} placeholder="Recipi Details" className="textarea textarea-lg w-full" ></textarea>
                </div>
                <div className="form-control my-5">
                    <input {...register("image", { required: true })} type="file" />
                </div>
                <div className="bg-[#7e5f2e] flex items-center gap-3 w-36 cursor-pointer text-white py-2 px-10" >
                    <input type="submit" value='Add Item' required />
                    <ImSpoonKnife />
                </div>
            </form>
        </div>
    );
};

export default AddItems;