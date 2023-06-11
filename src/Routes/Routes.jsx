import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashBoard from "../Layouts/DashBoard";
import Users from "../Pages/DashBoard/AdminDashboard/Users/Users";
import Courses from "../Pages/DashBoard/AdminDashboard/Courses/Courses";
import AddACourse from "../Pages/DashBoard/InstructorDashboard/AddACourse/AddACourse";
import MyCourses from "../Pages/DashBoard/InstructorDashboard/MyCourses/MyCourses";
import SelectedCourses from "../Pages/DashBoard/StudentDashboard/SelectedCourses/SelectedCourses";
import EnrolledCourses from "../Pages/DashBoard/StudentDashboard/EnrolledCourses/EnrolledCourses";
import Pay from "../Pages/DashBoard/StudentDashboard/Pay/Pay";
import PaymentHistory from "../Pages/DashBoard/StudentDashboard/PaymentHistory/PaymentHistory";
import InstructorRequests from "../Pages/DashBoard/AdminDashboard/InstructorRequests/InstructorRequests";
import PendingCourses from "../Pages/DashBoard/AdminDashboard/PendingCourses/PendingCourses";
import PrivateRoute from "./PrivateRoute";
import BeAnInstructor from "../Pages/BeAnInstructor/BeAnInstructor";
import AllCourses from "../Pages/AllCourses/AllCourses";
import Home from "../Pages/Home/Home/Home";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/all-courses',
                element: <AllCourses></AllCourses>
            },
            {
                path: '/instructors',
                element: <AllInstructors></AllInstructors>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'users',
                element: <Users></Users>
            },
            {
                path: 'courses',
                element: <Courses></Courses>
            },
            {
                path: 'instructor-requests',
                element: <InstructorRequests></InstructorRequests>
            },
            {
                path: 'pending-courses',
                element: <PendingCourses></PendingCourses>
            },
            {
                path: 'add-a-course',
                element: <AddACourse></AddACourse>
            },
            {
                path: 'my-courses',
                element: <MyCourses></MyCourses>
            },
            {
                path: 'selected-courses',
                element: <SelectedCourses></SelectedCourses>
            },
            {
                path: 'enrolled-courses',
                element: <EnrolledCourses></EnrolledCourses>
            },
            {
                path: 'pay/:id',
                element: <Pay></Pay>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
])