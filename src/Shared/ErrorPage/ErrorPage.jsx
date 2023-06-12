import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center max-h-screen items-center'>
            <div className='flex'>
                <img className='w-full' src="https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg" alt="" />
                <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                    <Link className='flex items-center' to='/'><h3 className='text-3xl font-semibold text-white '>Go Home</h3><FaHome className='ml-3 text-3xl font-semibold text-white'/></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;