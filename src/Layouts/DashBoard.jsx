import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    const isAdmin = true;
    const isInstructor = false;
    return (
        <div className="drawer lg:drawer-open container mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                {/* Page content here */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin && (<>
                            <li><NavLink to='users'>All Users</NavLink></li>
                            <li><NavLink to='courses'>All Courses</NavLink></li>
                        </>)
                    }

                    {
                        isInstructor && (<>
                            <li><NavLink to='add-a-course'>Add a Course</NavLink></li>
                            <li><NavLink to='my-courses'>My Courses</NavLink></li>
                        </>)
                    }


                    {
                        !isAdmin && !isInstructor && (<>
                            <li><NavLink to='selected-courses'>Selected Class</NavLink></li>
                            <li><NavLink to='enrolled-courses'>Enrolled Class</NavLink></li>
                            <li><NavLink to='pay'>Pay</NavLink></li>
                            <li><NavLink to='payment-history'>Payment History</NavLink></li>
                        </>)
                    }

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;