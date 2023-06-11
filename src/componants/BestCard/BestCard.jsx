import React from 'react';

const BestCard = ({ medal, heading, subHeading }) => {
    return (
        <div className='bg-cyan-700 py-8 shadow-lg hover:drop-shadow-lg'>
            <div className='flex justify-center'>
                <span className='text-7xl text-orange-500'>{medal}</span>
            </div>
            <h2 className='text-center text-3xl text-white mt-6'>{heading}</h2>
            <p className='text-center text-xl text-white mt-6'>{subHeading}</p>
        </div>
    );
};

export default BestCard;