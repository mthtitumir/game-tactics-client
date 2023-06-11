import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import { FaCartPlus } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [cart, refetch] = useCart();
    // console.log(cart);
    // console.log(isAdmin);
    // console.log(isInstructor);
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'You logged out successfully!',
                    'success'
                )
            })
    }
    const handleMakeInstructor = user => {
        axiosSecure.patch(`users/instructor/${user.email}`)
            .then(data => {
                // console.log(data);
                if (data.data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `You, ${user.displayName}, are an Instructor Now!`,
                    })
                }
            })
    };
    return (
        <div className='fixed z-50 top-5 flex justify-center w-full text-center  drop-shadow-lg'>
            <div className="bg-gray-900 container  navbar mx-auto rounded-lg border">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-white hover:text-orange-500'><Link to='/' >Home</Link></li>
                            <li className='text-white hover:text-orange-500'><Link to='/instructors' >Instructors</Link></li>
                            <li className='text-white hover:text-orange-500'><Link to='/all-courses'>Courses</Link></li>
                            <li className='text-white hover:text-orange-500'><Link to='/dashboard/selected-courses'><FaCartPlus className='text-lg' /><sup><div className="badge bg-red-600 text-white">{cart.length}</div></sup></Link></li>
                            {
                                user && !isAdmin && !isInstructor && <li className='text-white hover:text-orange-500' onClick={() => handleMakeInstructor(user)}>Be an Instructor</li>
                            }
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-10' src='' alt="" />
                        <Link to='/' className="font-bold normal-case text-xl"><span className='text-red-600'>Game</span><span className='text-cyan-600'>Tactics</span></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="font-semibold menu menu-horizontal px-1">
                        <li className='text-cyan-500 hover:text-white'><Link to='/' >Home</Link></li>
                        <li className='text-cyan-500 hover:text-white'><Link to='/instructors' >Instructors</Link></li>
                        <li className='text-white hover:text-orange-500'><Link to='/all-courses'>Courses</Link></li>
                        <li className='text-white hover:text-orange-500'><Link to='/dashboard/selected-courses'><FaCartPlus className='text-lg' /><sup><div className="badge bg-red-600 text-white">{cart.length}</div></sup></Link></li>
                        {
                            user && !isAdmin && !isInstructor && <li className='text-white hover:text-orange-500' onClick={() => handleMakeInstructor(user)}><Link to=''>Be an Instructor</Link></li>
                        }
                    </ul>
                </div>
                <div className='navbar-end gap-2 items-center'>
                    {
                        user ?

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 bg-slate-600 text-white shadow menu menu-sm dropdown-content rounded-box w-52">
                                    <li><Link>Profile</Link></li>
                                    <li><a>Settings</a></li>
                                    <li onClick={handleLogout}><Link>Logout</Link></li>
                                </ul>
                            </div>
                            :
                            <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;