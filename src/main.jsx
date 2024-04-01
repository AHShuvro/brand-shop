import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Error from './Components/Error/Error';
import MainSection from './Components/Main/MainSection';
import Carts from './Components/Carts/Carts';
import Home from './Components/Home/Home';
import Registar from './Components/Registar/Registar';
import Login from './Components/Login/Login';
import SeeProducts from './Components/SeeProducts/SeeProducts';
import AddProduct from './Components/AddProduct/AddProduct';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyCart from './Components/MyCart/MyCart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainSection></MainSection>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/brandinfo.json')

      },
      {
        path: "/carts",
        element: <Carts></Carts>,
        loader: () => fetch('/brandinfo.json')
      },
      {
        path: "/reg",
        element: <Registar></Registar>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/seeproducts/:brand_name",
        element: <SeeProducts></SeeProducts>,
      },
      {
        path: "/addpro",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
