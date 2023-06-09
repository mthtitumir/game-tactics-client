import React from 'react';
import useUsers from '../../../../hooks/useUsers';
import useAuth from '../../../../hooks/useAuth';
import DashboardHeader from '../../../../componants/DashboardHeader/DashboardHeader';
import {  FaUsers } from 'react-icons/fa';

const Users = () => {
    const [users] = useUsers();
    const { user } = useAuth();
    return (
        <div className=''>
            <DashboardHeader heading={"All Users"} />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='font-bold'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th className='text-center'>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((singleUser, index) =>
                                <tr key={singleUser?._id} className='hover'>
                                    <th>{index+1}</th>
                                    <td className="">{singleUser.name}</td>
                                    <td>{singleUser.email}</td>
                                    <td><FaUsers className='text-center text-teal-600 mx-auto text-2xl' /></td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;