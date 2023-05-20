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
import Blog from "../Pages/Blog/Blog";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

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
                loader: () => fetch("https://toy-tree-server.vercel.app/toys")
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><Details /></PrivateRoutes>,
                loader: ({params}) => fetch(`https://toy-tree-server.vercel.app/categoryDetails/${params.id}`)
            },
            {
                path: '/myToys/',
                element: <MyToys />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/update/:id',
                element: <UpdateToy />,
                loader: ({params}) => fetch(`https://toy-tree-server.vercel.app/update/${params.id}`)
            }
        ]
    }
])

export default router;