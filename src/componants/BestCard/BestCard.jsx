import React from 'react';

const BestCard = ({ medal, heading, subHeading }) => {
    return (
        <div className='bg-black py-8 px-5 shadow-lg hover:drop-shadow-lg'>
            <div className='flex justify-center'>
                <span className='text-7xl text-orange-500'>{medal}</span>
            </div>
            <h2 className='text-center text-3xl text-white mt-6'>{heading}</h2>
            <p className='text-center text-white mt-6'>{subHeading}</p>
        </div>
    );
};

export default BestCard;