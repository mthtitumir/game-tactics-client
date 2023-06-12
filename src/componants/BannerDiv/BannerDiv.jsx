import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const BannerDiv = () => {
    return (
        <div className='w-full bg-red-800'>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full flex items-center z-10 w-1/2 ">
                <div className='text-white space-y-5'>
                   <Slide> <h2 className='text-5xl font-bold '>Checkmate Your Summer with Mind-Boosting Chess Adventures!</h2></Slide>
                   <Fade delay={1e3} cascade damping={1e-1}><p className='text-md '>Level up your summer at our Chess Schooling Camp - where strategy meets fun and champions are born! Unleash your genius, conquer the board! Unleash Your Strategic Genius and Conquer the Board this Summer!</p></Fade>
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