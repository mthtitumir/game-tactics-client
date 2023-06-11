import React from 'react';
import BestCard from '../../../componants/BestCard/BestCard';
import {RiMedal2Line} from 'react-icons/ri'
import { FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
const BestCardSection = () => {
    return (
        <div className='container mx-auto grid md:grid-cols-3 gap-3 mt-10'>
            <BestCard medal ={<RiMedal2Line />} heading={"Best Courses"} subHeading={"hello"}/>
            <BestCard medal ={<FaChalkboardTeacher />} heading={"Best Courses"} subHeading={"hello"}/>
            <BestCard medal ={<FaUsers />} heading={"Best Courses"} subHeading={"hello"}/>
            
        </div>
    );
};

export default BestCardSection;