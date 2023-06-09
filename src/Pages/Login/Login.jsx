import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../componants/SocialLogin/SocialLogin';
import SecondaryBanner from '../../Shared/SecondaryBanner/SecondaryBanner';
import Swal from 'sweetalert2';

const Login = () => {
    const { user, logIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        logIn(data.email, data.password)
            .then(data => {
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'User created successfully.',
                });
                navigate(from, { replace: true })
            })
    };
    return (
        <div className=''>
            <SecondaryBanner></SecondaryBanner>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md max-h-screen mx-auto my-4 p-4 bg-gray-100 rounded shadow">
                <h2 className="text-3xl font-semibold mb-4 text-center">Please Login</h2>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="email">
                        Email:
                    </label>
                    <input {...register('email')} id="email" placeholder='Your Email' type="email" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="password">
                        Password:
                    </label>
                    <input {...register('password')} id="password" placeholder='Your Password' type="password" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className='text-center'>
                    <button type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded">Login</button>
                </div>
                <p className="mt-2 px-5 text-center">
                    Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link>.
                </p>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;