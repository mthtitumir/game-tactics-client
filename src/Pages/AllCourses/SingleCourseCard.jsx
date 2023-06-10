import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const SingleCourseCard = ({ course }) => {
    const { _id, name, instructor, image, price, ratings, seat } = course;
    const [cart, refetch] = useCart();
    // console.log(course);
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const handleSelectCard = courseItem => {
        const { _id, name, instructor, image, price } = courseItem;
        if (user && user.email) {
            const cartItem = { classId: _id, instructor, image, name, price, email: user.email }
            // console.log(cartItem);
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
            <figure><img className='rounded-lg' src="https://images.pexels.com/photos/7203727/pexels-photo-7203727.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">{price}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <button onClick={() => { handleSelectCard(course) }} className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourseCard;