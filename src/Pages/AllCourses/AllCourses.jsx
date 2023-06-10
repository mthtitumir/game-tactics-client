import React from 'react';
import SecondaryBanner from '../../Shared/SecondaryBanner/SecondaryBanner';
import useCourses from '../../hooks/useCourses';
import SingleCourseCard from './SingleCourseCard';

const AllCourses = () => {
    const [courses] = useCourses();
    // console.log(courses);
    return (
        <div className='container mx-auto'>
            <SecondaryBanner title={"All Courses"}></SecondaryBanner>
            <div className='mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                    courses.map(course => <SingleCourseCard key={course._id} course={course} />)
                }
            </div>
        </div>
    );
};

export default AllCourses;