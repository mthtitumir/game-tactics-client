import React from 'react';

const BannerDiv = () => {
    return (
        <div className="absolute h-full flex items-center w-1/2 bg-gradient-to-r from-cyan-800 to-[rgba(21, 21, 21, 0)] pl-10">
            <div className='text-white space-y-5'>
                <h2 className='text-6xl font-bold '>Experience compassionate cardiac care</h2>
                <p className='text-md '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione eum quam quaerat sequi tempora velit commodi error tenetur repellat inventore enim maxime, reiciendis sint laboriosam!</p>
                <div className='flex gap-4'>
                    <button className="bg-cyan-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">Read More</button>
                    <button className="bg-red-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">About Us</button>
                </div>
            </div>
        </div>
    );
};

export default BannerDiv;