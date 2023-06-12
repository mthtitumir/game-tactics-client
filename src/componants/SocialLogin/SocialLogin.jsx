import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleAuth = () => {
        googleLogin()
            .then((result) => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email};
                axios.post('https://game-tactics-server.vercel.app/users', saveUser)
                    .then(response => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div className='text-center'>
            <h2 className='text-sm font-semibold mb-3 text-gray-600'>Continue With</h2>
            <div className="flex w-1/2 mx-auto">
                <FaGoogle onClick={handleGoogleAuth} className='mx-auto text-4xl text-white bg-red-600 border rounded-[50%] p-2' />

            </div>
        </div>
    );
};

export default SocialLogin;