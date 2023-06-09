import React from 'react';
import useUsers from '../../../../hooks/useUsers';
import useAuth from '../../../../hooks/useAuth';

const Users = () => {
    const [users] = useUsers();
    const { user } = useAuth();
    return (
        <div className='w-full px-20'>
            <div className="divider"></div>
            <div className="flex items-center justify-between">
                <h3 className='text-2xl font-semibold'>All Users</h3>
                <h3 className='text-2xl font-semibold'>Total Users: {users.length}</h3>
            </div>
            <div className="divider"></div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((singleUser, index) =>
                                <tr key={singleUser?._id}>
                                    <th>{index+1}</th>
                                    <td className="font-bold">{singleUser.name}</td>
                                    <td>{singleUser.email}</td>
                                    <td>Purple</td>
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