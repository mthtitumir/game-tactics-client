import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCourses = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: courses=[], refetch} = useQuery({
        queryKey: ['courses'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure('/courses')
            console.log(res);
            return res.data;
        }
    })
    return [courses, refetch]
};

export default useCourses;