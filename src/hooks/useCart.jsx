import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: cart=[], refetch} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            // console.log(res);
            return res.data;
        }
    })
    return [cart, refetch];
};

export default useCart;