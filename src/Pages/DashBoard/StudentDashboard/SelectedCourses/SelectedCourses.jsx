import React from 'react';
import useCart from '../../../../hooks/useCart';
import DashboardHeader from '../../../../componants/DashboardHeader/DashboardHeader';

const SelectedCourses = () => {
    const [cart, refetch] = useCart();
    return (
        <div>
            <DashboardHeader heading={"Your Selected Courses"} />
        </div>
    );
};

export default SelectedCourses;