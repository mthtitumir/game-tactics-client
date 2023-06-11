import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from '../../../assets/Slider/slider1.jpg';
import slider2 from '../../../assets/Slider/slider2.jpg';
import slider3 from '../../../assets/Slider/slider3.jpg';
import slider4 from '../../../assets/Slider/slider4.jpg';
import BannerDiv from '../../../componants/BannerDiv/BannerDiv';

const Slider = () => {
    return (
        <Carousel showArrows={false} transitionTime={200} stopOnHover={false} showIndicators={true} infiniteLoop={false} autoPlay={false} showThumbs={false}>
            <div className='relative w-full'>
               <img className='w-full' src={slider1} />
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
            </div>
            <div>
                <img src={slider2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={slider3} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={slider4} />
                <p className="legend">Legend 4</p>
            </div>
        </Carousel>
    );
};

export default Slider;