import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddACourse = ({ displayName, email }) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = (data) => {
        const {className, classImage, price, availableSeats, details, instructorEmail, instructorName } = data;

        console.log(data);
        const newItem = {className, classImage, price, availableSeats, details, instructorEmail, instructorName, status: 'pending', enrolled: 0 }
        axiosSecure.post('/courses', newItem)
        .then(data =>{
            if(data.data.insertedId){
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Course added, wait for approval!', 
                  })
            }
        })
    };

    return (
        <div className="md:w-1/2 mx-auto p-6 bg-white shadow-lg hover:drop-shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Add Course</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex">
                    <div className="mb-4">
                        <label htmlFor="className" className="block font-medium">Class Name</label>
                        <input type="text" id="className" {...register('className', { required: true })} className="w-full border rounded-md px-4 py-2" placeholder="Enter class name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="classImage" className="block font-medium">Class Image</label>
                        <input type="text" id="classImage" {...register('classImage')} className="w-full border rounded-md px-4 py-2" placeholder="Enter class PhotoURL" />
                    </div>
                </div>
                <div className="flex">
                    <div className="mb-4">
                        <label htmlFor="instructorName" className="block font-medium">Instructor Name</label>
                        <input type="text" id="instructorName" defaultValue={user.displayName} {...register('instructorName', { readOnly: true })} className="w-full border rounded-md px-4 py-2" value={displayName} readOnly />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="instructorEmail" className="block font-medium">Instructor Email</label>
                        <input type="email" id="instructorEmail" defaultValue={user.email} {...register('instructorEmail', { readOnly: true })} className="w-full border rounded-md px-4 py-2" value={email} readOnly />
                    </div>
                </div>
                <div className="flex">
                    <div className="mb-4">
                        <label htmlFor="availableSeats" className="block font-medium">Available Seats</label>
                        <input type="number" id="availableSeats" {...register('availableSeats', { required: true })} className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Enter available seats" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block font-medium ">Price</label>
                        <input type="number" id="price" {...register('price', { required: true })} className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Enter price" />
                    </div>
                </div>
                <div>
                    <label htmlFor="details" className="block font-medium ">Enter Class Details</label>
                    <input type="text" id="details" {...register('details', { required: true })} placeholder="Course Details" className="w-full border-gray-300 rounded-md px-4 py-2 textarea textarea-secondary" />
                </div>
                <div className='text-center'>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mx-auto">Add Course</button>
                </div>
            </form>
        </div>
    );
};

export default AddACourse;
