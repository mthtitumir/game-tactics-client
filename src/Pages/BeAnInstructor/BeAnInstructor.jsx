import React from 'react';
import useAuth from '../../hooks/useAuth';

const BeAnInstructor = () => {
    const { user } = useAuth();
    return (
        <div className='mt-20 container mx-auto'>
            <div className="card mx-auto md:w-1/3 bg-base-100 hover:drop-shadow-lg shadow-xl">
                <figure><img className='rounded-[50%]' src={user.photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Welcome {user.displayName}</h2>
                    <p className='text-center'>Provide the information below!</p>
                    
                </div>
            </div>
        </div>
    );
};

export default BeAnInstructor;