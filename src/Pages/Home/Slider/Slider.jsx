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
        <Carousel showArrows={false} transitionTime={200} stopOnHover={true} showIndicators={true} infiniteLoop={true} autoPlay={true} showThumbs={false}>
            <div className='relative w-full '>
               <img className='w-full min-h-screen object-cover' src={slider1} />
                <BannerDiv></BannerDiv>
            </div>
            <div className='relative w-full '>
               <img className='w-full min-h-screen object-cover' src={slider2} />
                <BannerDiv></BannerDiv>
            </div>
            <div className='relative w-full '>
               <img className='w-full min-h-screen object-cover' src={slider3} />
                <BannerDiv></BannerDiv>
            </div>
            <div className='relative w-full '>
               <img className='w-full min-h-screen object-cover' src={slider4} />
                <BannerDiv></BannerDiv>
            </div>
            
        </Carousel>
    );
};

export default Slider;