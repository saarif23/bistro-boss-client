import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import HorizontalLine from '../../Components/horizontalLine';
import { FaFacebookF, FaGithub } from "react-icons/fa";
import toast from 'react-hot-toast';
import GoogleLogin from '../../Components/googleLogin';

const Login = () => {
    const { loginUser, } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const captchaRef = useRef();
    const [disable, setDisable] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(() => {
                toast.success("Login Successfully")
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))

    }

    const handleValidCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }


    // const handleGoogleLogin = () => {
    //     googleSignIn()
    //         .then(() => {
    //             toast.success("Google Sign In Success")
    //             navigate(from, { replace: true });
    //         })
    //         .catch(error => console.log(error))
    // }


    return (

        <div style={{ backgroundImage: 'url("https://i.ibb.co/smLRWH9/authentication.png")' }} className="min-h-screen flex items-center ">
            <div className=" flex items-center gap-10 shadow-2xl border-2 px-36 py-20 mx-20 ">
                <div className="flex-1">
                    <img src="https://i.ibb.co/5kB1WY8/authentication2.png" alt="" />
                </div>

                <div className="flex-1">
                    <h3 className="text-3xl font-bold text-center">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <LoadCanvasTemplate />
                            </label>
                            <input name="captcha" ref={captchaRef} placeholder="Enter Captcha" className="input input-bordered" required />
                        </div>
                        <div className="form-control">

                            <input onClick={handleValidCaptcha} type="button" value="valided captcha" className="input input-bordered mt-2 btn-sm" required />

                        </div>
                        <div className="form-control">
                            <input type="submit" disabled={disable} className="input border-2 bg-[#D1A054] my-5" required />
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="text-[#D1A054] font-medium ">New here ? <Link to="/signUP"><span>Create an New Account </span></Link></p>

                        <HorizontalLine chars={25} />Or <HorizontalLine chars={25} />

                        <div className='flex justify-center gap-8 pt-5'>
                            <GoogleLogin></GoogleLogin>
                            <button className='border  p-3 border-black rounded-full'><FaFacebookF></FaFacebookF></button>
                            <button className='border  p-3 border-black rounded-full'><FaGithub></FaGithub></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;