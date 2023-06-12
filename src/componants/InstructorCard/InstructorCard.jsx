import React from 'react';

const InstructorCard = ({instructor}) => {
    return (
        <div className="card rounded hover:drop-shadow-lg w-full bg-base-100">
                        <figure className='h-48 w-48 rounded-[50%] mx-auto'><img className='' src={instructor.photo} alt="" /></figure>
                        <div className="card-body mx-auto w-full shadow-lg">
                            <h2 className="text-center text-xl font-semibold">Name: {instructor.name}</h2>
                            <p>Experienced chess instructor igniting passion and strategy in learners of all levels. Join us for an engaging journey towards chess mastery.</p>
                            <h2 className="text-center font-semibold">Email: {instructor.email}</h2>
                            <div className="card-actions justify-center">
                                <button className="px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded uppercase">See Courses</button>
                            </div>
                        </div>
                    </div>
    );
};

export default InstructorCard;