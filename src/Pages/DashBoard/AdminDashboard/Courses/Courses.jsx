import React from 'react';
import useCourses from '../../../../hooks/useCourses';

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div>
            All courses here: {courses.length}
        </div>
    );
};

export default Courses;