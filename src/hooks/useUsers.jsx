import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure('/users')
            console.log(res);
            return res.data;
        }
    })
    return [users, refetch]
};

export default useUsers;