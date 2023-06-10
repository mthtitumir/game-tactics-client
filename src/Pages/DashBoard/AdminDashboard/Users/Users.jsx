import React from 'react';
import useUsers from '../../../../hooks/useUsers';
import useAuth from '../../../../hooks/useAuth';
import DashboardHeader from '../../../../componants/DashboardHeader/DashboardHeader';
import {  FaUsers } from 'react-icons/fa';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Users = () => {
    const [axiosSecure] = useAxiosSecure();
    const [users, refetch] = useUsers();
    const { user } = useAuth();
    const handleMakeAdmin = singleUser =>{
        axiosSecure.patch(`users/admin/${singleUser._id}`)
        .then(data =>{
            console.log(data);
            if(data.data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${singleUser.name} is an Admin Now!`, 
                  })
            }
        })
    }
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
                                    <td>
                                        {
                                            singleUser.role ? singleUser.role : <FaUsers title='Make Admin' onClick={()=> handleMakeAdmin(singleUser)} className='text-center text-teal-600 mx-auto text-2xl' />
                                        }
                                    </td>
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