import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayouts from './Layouts/HomeLayouts';
import HomePage from './Pages/HomePage';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h2>Error</h2>,
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
