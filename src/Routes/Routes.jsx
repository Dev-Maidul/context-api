import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "../Layout/PrivateRoutes";
import Order from "../Components/Order";
import Profile from "../Components/Profile";
export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {
            index: true,
            Component: Home
        },
        {
            path: '/login',
            Component: Login,
        },
        {
            path: '/register',
            Component: Register,
        },
        {
          path: '/order',
          element: <PrivateRoutes><Order></Order></PrivateRoutes>
        },
        {
          path: '/profile',
          element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
        }
      ],
    },
  ]);