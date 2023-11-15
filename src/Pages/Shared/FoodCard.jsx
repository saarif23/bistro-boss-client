import { useContext } from "react";
import Button from "../../Components/Button";
import { AuthContext } from "../../Provider/AuthProvider";

import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    // eslint-disable-next-line react/prop-types
    const { _id, image, recipe, name, price } = item;


    const handleAddToCart = () => {

        if (user) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                image,
                name,
                price
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success("Add To Cart Successfully")
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            toast.error(`You can't add before sign in ! 
            Please Sign In`)
            navigate("/login", { state: { from: location } })
        }


    }
    return (
        <div className="card bg-slate-100 relative">
            <img src={image} alt="" className="" />
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere blanditiis assumenda. Ratione odio illo, sunt voluptas error est molestiae!</p>
                <button onClick={() => { handleAddToCart(item) }}> <Button btnText={'Add To Cart'}></Button></button>
            </div>
            <p className="bg-black px-4 py-2 absolute text-white rounded-lg right-3 top-3 bg-opacity-40">{price}</p>
        </div>
    );
};

export default FoodCard;