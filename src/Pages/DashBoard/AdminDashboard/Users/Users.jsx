import React from 'react';
import useUsers from '../../../../hooks/useUsers';

const Users = () => {
    const [users] = useUsers();
    return (
        <div>
            All users here: {users.length}
        </div>
    );
};

export default Users;