import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import NavBar from '../Shared/Navbar/NavBar';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const DashBoard = () => {
    const [isAdmin] = useAdmin();
    // console.log(isAdmin);
    const [isInstructor] = useInstructor();
    // console.log(isInstructor);
    return (
        <>
            <div className="drawer lg:drawer-open container mx-auto mt-20">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col px-10">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    {/* Page content here */}
                    {/* <div className='flex justify-center items-center min-h-screen'>
                        <h3 className='text-3xl font-semibold text-red-700'>Welcome Back!</h3>
                    </div> */}
                    <Outlet className=' px-20'></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin && (<>
                                <li><NavLink to='users'>All Users</NavLink></li>
                                <li><NavLink to='courses'>All Courses</NavLink></li>
                                <li><NavLink to='instructor-requests'>Instructor Requests</NavLink></li>
                                <li><NavLink to='pending-courses'>Pending Courses</NavLink></li>
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
                                <li><NavLink to='selected-courses'>Selected Courses</NavLink></li>
                                <li><NavLink to='enrolled-courses'>Enrolled Courses</NavLink></li>
                                <li><NavLink to='pay'>Pay</NavLink></li>
                                <li><NavLink to='payment-history'>Payment History</NavLink></li>
                            </>)
                        }
                        <div className="divider"></div>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='profile'>Profile</NavLink></li>
                    </ul>


                </div>
            </div>
        </>
    );
};

export default DashBoard;