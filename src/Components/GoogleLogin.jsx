import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((res) => {
                const user = {
                    name: res.user.displayName,
                    email: res.user.email
                }
                toast.success("Google Sign In Success")
                navigate(from, { replace: true });

                axiosPublic.post("/users", user)
                    .then(res => {
                        if (res.data.insertedId) {
                            toast.success("user add in database")
                        }
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}
                className='border  p-3 border-black rounded-full'>
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default GoogleLogin;