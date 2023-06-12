import React from 'react';
import SectionHeader from '../../../componants/SectionHeader/SectionHeader';
import useCourses from '../../../hooks/useCourses';
import SingleCourseCard from '../../../componants/SingleCourseCard/SingleCourseCard';

const PopularCourses = () => {
    const [courses] = useCourses();
    return (
        <div className='container mx-auto my-5'>
            <SectionHeader heading={"Popular Courses"} subHeading={"Meet The World's Best Chess Courses"} />
            <div className='mt-6 container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                    courses.map(course => <SingleCourseCard key={course._id} course={course} />)
                }
            </div>
        </div>
    );
};

export default PopularCourses;