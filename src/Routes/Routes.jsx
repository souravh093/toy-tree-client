import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Register from "../Pages/Login/Register/Register";
import Login from "../Pages/Login/Login/Login";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRoutes from "./PrivateRoutes";
import Details from "../Pages/Details/Details";
import MyToys from "../Pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/addToy',
                element: <PrivateRoutes><AddToy /></PrivateRoutes>
            },
            {
                path: '/allToys',
                element: <AllToys />,
                loader: () => fetch("http://localhost:5000/toys")
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><Details /></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/categoryDetails/${params.id}`)
            },
            {
                path: '/myToys/',
                element: <MyToys />
            }
        ]
    }
])

export default router;