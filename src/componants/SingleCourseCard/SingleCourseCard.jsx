import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const SingleCourseCard = ({ course }) => {
    const { _id, className, instructorName, classImage, price, availableSeats } = course;
    const [cart, refetch] = useCart();
    console.log(course);
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const handleSelectCard = courseItem => {
        console.log(courseItem);
        const { _id, classImage, className, instructorEmail, enrolled, price } = courseItem;
        if (user && user.email) {
            const cartItem = { classId: _id, instructorEmail, classImage, className, enrolled, price, email: user.email, paymentStatus: 'unpaid' }
            console.log(cartItem);
            axiosSecure.post('/carts', cartItem)
                .then(data => {
                    // console.log(data);
                    if (data.data.insertedId) {
                        refetch();
                        Swal.fire({
                            icon: 'success',
                            title: 'Selected successfully',
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: data.data.message,
                        })
                    }


                })

        }
    }

    return (
        <div className="flex flex-col rounded-lg w-full bg-base-100 drop-shadow-lg hover:shadow-xl">
        <figure><img className='rounded-lg' src={classImage} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <h2 className="font-semibold text-cyan-900">Instructor: {instructorName}</h2>
                <div className='flex justify-between font-semibold'>
                    <p>Price: ${price}</p>
                    <p>Available Seats: {availableSeats}</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => { handleSelectCard(course) }} className="px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded uppercase">Select</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourseCard;