import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../component/Home/Home";
import AllToys from "../component/All Toys/AllToys";
import MyToys from "../component/My Toys/MyToys";
import AddToys from "../component/AddToys/AddToys";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Update from "../component/Update/Update";
import ToyDetails from "../component/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../component/Blog/Blog";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/allToys',
          element:<AllToys />
        },
        {
          path:'/myToys',
          element:<PrivateRoute><MyToys /></PrivateRoute>
        },
        {
          path:'/addToys',
          element:<PrivateRoute><AddToys /></PrivateRoute>
        },
        {
          path:'/login',
          element:<Login />
        },
        {
          path:'/register',
          element:<Register />
        },
        {
          path:'/update',
          element:<Update />
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><ToyDetails /></PrivateRoute>
        },
        {
          path:'/blog',
          element:<Blog />
        }
      ]
    }
  ]);

  export default router;