import React from 'react';
import Slider from '../Slider/Slider';
import BestCardSection from '../BestCardSection/BestCardSection';
import PopularCourses from '../PopularCourses/PopularCourses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Slider />
            <BestCardSection />
            {/* <PopularCourses /> */}
            <PopularInstructors />
        </div>
    );
};

export default Home;