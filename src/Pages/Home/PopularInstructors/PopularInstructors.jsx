import React from 'react';
import useInstructors from '../../../hooks/useInstructors';
import SectionHeader from '../../../componants/SectionHeader/SectionHeader';
import InstructorCard from '../../../componants/InstructorCard/InstructorCard';

const PopularInstructors = () => {
    const [instructors] = useInstructors();
    console.log(instructors);
    return (
        <div className='container mx-auto mt-8'>
            <SectionHeader heading={"Popular Instructors"} subHeading={"Meet The World's Best Chess Masters"} />
            <div className='grid md:grid-cols-3 gap-5 mt-5'>
                {
                    instructors?.slice(0,6).map(instructor => <InstructorCard key={instructor._id} instructor={instructor} />)
                }
            </div>

        </div>
    );
};

export default PopularInstructors;