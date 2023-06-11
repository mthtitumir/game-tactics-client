import React from 'react';
import Slider from '../Slider/Slider';
import BestCardSection from '../BestCardSection/BestCardSection';
import PopularCourses from '../PopularCourses/PopularCourses';

const Home = () => {
    return (
        <div>
            <Slider />
            <BestCardSection />
            <PopularCourses />
        </div>
    );
};

export default Home;