import React from 'react';
import useCourses from '../../../../hooks/useCourses';
import DashboardHeader from '../../../../componants/DashboardHeader/DashboardHeader';

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div className=''>
            <DashboardHeader heading={"All Courses"} />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='font-bold text-black'>
                            <th>#</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Approval</th>
                            <th>Denial</th>
                            <th>Send Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            courses.map((course, index) =>
                                <tr key={course?._id} className='hover '>
                                    <th>{index + 1}</th>
                                    <td className="">
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png" />
                                                </div>
                                            </div>
                                            <div><h1>{course.name}</h1></div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="">{course.instructor}</div>
                                            <div className="text-sm opacity-50">email</div>
                                        </div>
                                    </td>
                                    <td>{course.seat}</td>
                                    <td>${course.price}</td>
                                    <td>Pending</td>
                                    <th><button className="btn btn-ghost btn-xs">Approve</button></th>
                                    <th><button className="btn btn-ghost btn-xs">Deny</button></th>
                                    <th><button className="btn btn-ghost btn-xs">Feedback</button></th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Courses;