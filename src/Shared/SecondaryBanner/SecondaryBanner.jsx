import React from 'react';

const SecondaryBanner = ({title}) => {
    return (
        <div className='relative mt-20'>
            <div>
                <img className='mx-auto' src="https://i.ibb.co/GPC3GCT/chess.jpg" alt="" />
            </div>
            <div className='absolute  inset-0 flex items-center justify-center'>
                <h2 className='text-3xl font-semibold text-white text-center'>Game Tactics | {title}</h2>
            </div>
        </div>
    );
};

export default SecondaryBanner;