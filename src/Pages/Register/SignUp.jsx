import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, photoURL, email, password }
        console.log(user);
        createUser(email, password)
            .then(result => {
                toast.success("User Created Successfully")
                console.log(result.user);
                updateUserProfile(name, photoURL)
                    .then(result => {
                        console.log(result);
                        toast.success("User Update Successfully")
                        navigate("/")

                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });

    }
    return (
        <div style={{ backgroundImage: 'url("https://i.ibb.co/smLRWH9/authentication.png")' }} className="min-h-screen flex items-center ">
            <div className=" flex items-center gap-10 shadow-2xl border-2 px-36 py-20 mx-20 ">
                <div className="flex-1">
                    <img src="https://i.ibb.co/5kB1WY8/authentication2.png" alt="" />
                </div>

                <div className="flex-1">
                    <h3 className="text-3xl font-bold text-center">Sign UP</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="type here your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Photo</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="type here photoUrl" className="input input-bordered" required />
                        </div>
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
                            <input type="submit" className="input border-2 bg-[#D1A054] my-5" required />
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="text-[#D1A054] font-medium ">Already  Registed? <Link to="/login"><span>go to login </span></Link></p>
                        <p className="">Or sign up with </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;