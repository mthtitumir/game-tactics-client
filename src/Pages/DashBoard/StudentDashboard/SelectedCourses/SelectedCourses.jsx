import React from 'react';
import useCart from '../../../../hooks/useCart';
import DashboardHeader from '../../../../componants/DashboardHeader/DashboardHeader';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const SelectedCourses = () => {
    const [cart, refetch] = useCart();
    const [axiosSecure] = useAxiosSecure();
    const selectedCourses = cart.filter(selectedCourse => selectedCourse.paymentStatus === 'unpaid');
    console.log(selectedCourses);
    // console.log(cart);
    
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${item._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <DashboardHeader heading={"Your Selected Courses"} />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Delete</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedCourses.map((cartItem, index) => <tr key={cartItem._id} className=" hover">
                                <th>{index + 1}</th>
                                <td>{cartItem.name}</td>
                                <td><button onClick={() => { handleDelete(cartItem) }} className='bg-orange-500 hover:bg-orange-600 px-2 py-1 text-white rounded-md font-semibold uppercase'>Delete</button></td>
                                <td className='font-semibold'>${cartItem.price}</td>
                                <td><Link to={`/dashboard/pay/${cartItem._id}`}><button className='bg-teal-500 hover:bg-teal-600 px-2 py-1 text-white rounded-md font-semibold uppercase'>Pay</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedCourses;