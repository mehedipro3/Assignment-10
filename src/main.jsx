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
import AuthLayouts from './Layouts/AuthLayouts';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Provider/AuthProvider';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ]
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
