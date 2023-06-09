import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import SocialLogin from '../../componants/SocialLogin/SocialLogin';

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email};
                        axios.post('http://localhost:5002/users', savedUser)
                            .then(response => {
                                console.log('Data posted:', response.data);
                                if (response.data.insertedId) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'User created successfully.',

                                    });
                                    navigate('/');
                                }
                            })

                    })

            })
    };
    return (
        <div className='p-5 md:p-2'>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto my-4 p-4 bg-gray-100 rounded shadow">
                <h2 className="text-3xl font-semibold mb-4 text-center">Create an Account</h2>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="name">
                        Name:
                    </label>
                    <input {...register('name')} id="name" placeholder='Your Name' type="text" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="email">
                        Email:
                    </label>
                    <input {...register('email')} id="email" placeholder='Your Email' type="email" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="photo">
                        Photo URL:
                    </label>
                    <input {...register('photo')} id="photo" placeholder='Your Photo URL' type="text" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="password">
                        Password:
                    </label>
                    <input {...register('password', { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[\W_])/ })} id="password" placeholder='Your Password' type="password" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="confirm-password">
                        Confirm Password:
                    </label>
                    <input {...register('confirmPassword')} id="confirm-password" placeholder='Confirm Password' type="password" className="w-full p-2 border border-gray-300 rounded" required />
                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}
                </div>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="gender">
                        Gender:
                    </label>
                    <select name="gender" id="gender" className="w-full p-2 border border-gray-300 rounded">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="phone">
                        Phone:
                    </label>
                    <input {...register('phone')} id="phone" placeholder='Phone Number' type="text" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="address">
                        Address:
                    </label>
                    <input {...register('address')} id="address" placeholder='Your Address' type="text" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className='text-center'>
                    <button type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded">Register</button>
                </div>
                <p className="mt-2 px-5 text-center">
                    Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>.
                </p>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Register;