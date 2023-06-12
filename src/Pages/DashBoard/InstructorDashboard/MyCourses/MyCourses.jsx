import React from 'react';
import useCourses from '../../../../hooks/useCourses';
import useAuth from '../../../../hooks/useAuth';

const MyCourses = () => {
    const [courses, refetch] = useCourses();
    const {user} = useAuth();
    const myCourses = courses?.filter(course=> course.instructorEmail === user?.email);
    console.log(myCourses);
    return (
        <div>
            My courses
        </div>
    );
};

export default MyCourses;