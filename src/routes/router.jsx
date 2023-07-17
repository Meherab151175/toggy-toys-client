import { createBrowserRouter } from "react-router-dom";
// import Main from "../layouts/Main";
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
import Error from "../component/Error/Error";
import LoginLayouts from "../component/Layouts/LoginLayouts";
import MainLayOuts from "../component/Layouts/MainLayOuts";
import ToysCard from "../component/ToyCard/ToysCard";
import SingleToyLayouts from "../component/Layouts/SingleToyLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayOuts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:id",
        element: <ToysCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },

    ],
  },
  {
    path: "/",
    element: <SingleToyLayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/myToys",
        element:<PrivateRoute><MyToys /></PrivateRoute>
      },
      {
        path:'/addToys',
        element:<PrivateRoute><AddToys /></PrivateRoute>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><ToyDetails /></PrivateRoute>
      },
      {
        path:'/blog',
        element:<Blog />
      },
      {
        path:'/update',
        element:<Update />
      }
    ],
  },
  {
    path:'/allToys',
    element:<AllToys />
  }
]);

export default router;

// children:[
//   {
//     path:'/',
//     element:<Home />
//   },

//   {
//     path:'/myToys',
//     element:<PrivateRoute><MyToys /></PrivateRoute>
//   },

//   {
//     path:'/login',
//     element:<Login />
//   },
//   {
//     path:'/register',
//     element:<Register />
//   },
//   {



// ]

/* 
      {
        path:'/allToys',
        element:<AllToys />
      },
 */
