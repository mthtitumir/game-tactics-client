import React from 'react';

const SingleCourseCard = ({course}) => {
    const {name, instructor, price, ratings, seat} = course;
    return (
        <div className="flex flex-col rounded-lg w-full bg-base-100 drop-shadow-lg hover:shadow-xl">
            <figure><img className='rounded-lg' src="https://images.pexels.com/photos/7203727/pexels-photo-7203727.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourseCard;