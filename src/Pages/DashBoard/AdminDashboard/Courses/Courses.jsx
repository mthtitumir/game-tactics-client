import React from 'react';
import useCourses from '../../../../hooks/useCourses';

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div>
            All courses here
        </div>
    );
};

export default Courses;