import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayouts from './Layouts/HomeLayouts';
import HomePage from './Pages/HomePage';
import ErrorPage from './Components/ErrorPage';
import AllVisa from './Components/AllVisa';
import AddVisa from './Components/AddVisa';
import VisaApplication from './Components/VisaApplication';
import MyAddedVisa from './Components/MyAddedVisa';
import AuthLayouts from './Layouts/AuthLayouts';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Provider/AuthProvider';
import VisaDetails from './Components/VisaDetails';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader : ()=> fetch("http://localhost:5000/datas"),
      },
    ]
  },

  {
    path : "/visaDetails/:id",
    element : <VisaDetails></VisaDetails>,
    loader : ({params})=> fetch(`http://localhost:5000/datas/${params.id}`)
  },
  
  {
    path: "/allVisa",
    element: <AllVisa></AllVisa>,
    loader : ()=>fetch('http://localhost:5000/datas')
  },
  {
    path: "/addVisa",
    element: <AddVisa></AddVisa>,
  },
  {
    path: "/myAddedVisa",
    element: <MyAddedVisa></MyAddedVisa>,
  },
  {
    path: "/visaApplication",
    element: <VisaApplication></VisaApplication>,
  },
  
  
  {
    path: "/auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
