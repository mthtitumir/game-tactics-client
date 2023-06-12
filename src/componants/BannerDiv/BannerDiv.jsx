import React from 'react';

const BannerDiv = () => {
    return (
        <div className='w-full bg-red-800'>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full flex items-center z-10 w-1/2 ">
                <div className='text-white space-y-5'>
                    <h2 className='text-6xl font-bold '>Experience compassionate cardiac care</h2>
                    <p className='text-md '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione eum quam quaerat sequi tempora velit commodi error tenetur repellat inventore enim maxime, reiciendis sint laboriosam!</p>
                    <div className='flex justify-center gap-4'>
                        <button className="bg-cyan-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">Read More</button>
                        <button className="bg-red-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerDiv;