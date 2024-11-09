import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home.jsx'
import Register from './components/register.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/signUp.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
