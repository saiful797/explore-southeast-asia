import {  useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/firebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";


const SignUpPage = () => {

    const {createUser} =  useContext(AuthContext);

    const [showPassword, setShowPassword]=useState(false);
    const {register ,reset , handleSubmit} = useForm();

    const onSubmit = (data) =>{
        // console.log(data);
        const { email, password, } = data;

        console.log(email, password);

        createUser(email, password).then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Account Create Successfully!',
                icon: 'success',
                confirmButtonText: 'OK',
            })
        })
        reset();
    }
  
    return (
        <div className="min-h-screen bg-[url('https://i.postimg.cc/Gh3XYhh6/tourism3.jpg')] bg-no-repeat bg-cover">
            <div className="hero-content flex-col">
                <div className="text-center mb-2">
                    <h1 className="text-5xl mt-5 font-bold text-white">Create an Account</h1>
                </div>
                <div className="card w-full max-w-sm shadow-green-500 shadow-sm bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name..." name="name" className="input input-bordered" {...register("name")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email..." name="email" className="input input-bordered" {...register("email")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Enter your photo url..." name="imageURL" {...register("imageURL")} className="input input-bordered"/>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword? "text":"password"} placeholder="Password..." name="password" className="input input-bordered" {...register("password")} required />
                            <span className="top-[54px] right-5  absolute" onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-black text-white text-lg">Register</button>
                        </div>
                        <div className="flex justify-center gap-5">
                            <h1>Have an account?</h1>
                            <Link to="/login"><p className="text-sky-400 font-bold hover:text-black link link-hover"> Sign In </p></Link>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default SignUpPage;