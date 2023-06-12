import React from 'react';
import BestCard from '../../../componants/BestCard/BestCard';
import {RiMedal2Line} from 'react-icons/ri'
import { FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
const BestCardSection = () => {
    return (
        <div className='container mx-auto grid md:grid-cols-3 gap-3 mt-10'>
            <BestCard medal ={<RiMedal2Line />} heading={"Best Courses"} subHeading={"With comprehensive lessons and insightful analysis, it empowers learners to sharpen their tactical acumen and outmaneuver opponents. Immerse yourself in this enriching experience and elevate your chess skills to new heights."}/>
            <BestCard medal ={<FaChalkboardTeacher />} heading={"Best Instructors"} subHeading={"With comprehensive lessons and insightful analysis, it empowers learners to sharpen their tactical acumen and outmaneuver opponents. Immerse yourself in this enriching experience and elevate your chess skills to new heights."}/>
            <BestCard medal ={<FaUsers />} heading={"1800+ Students"} subHeading={"With comprehensive lessons and insightful analysis, it empowers learners to sharpen their tactical acumen and outmaneuver opponents. Immerse yourself in this enriching experience and elevate your chess skills to new heights."}/>
            
        </div>
    );
};

export default BestCardSection;