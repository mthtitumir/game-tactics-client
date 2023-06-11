import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useInstructors = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: instructors=[], refetch} = useQuery({
        queryKey: ['instructors'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure('/users/instructors')
            // console.log(res);
            return res.data;
        }
    })
    return [instructors, refetch]
};

export default useInstructors;