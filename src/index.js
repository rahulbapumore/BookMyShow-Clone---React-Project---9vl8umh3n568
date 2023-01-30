import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import About from "./components/About";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider,Outlet } from "react-router-dom";

import { HashRouter } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom";

const AppLayout = () =>
{
    return (<>
        <Navbar />
        <Outlet />
    </>)
}
  const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
                    {
                        path: "/",
                        element: <App />,
                        
                    },
                    {
                        path: "/about",
                        element: <About />,
                        
                    },
                    {
                        path: "/movie/:id",
                        element: <Movie />,
                        
                    },
                    {
                        path: "/login",
                        element: <Login />,
                        
                    },
                    {
                        path: "/signup",
                        element: <SignUp />,
                        
                    },
        ],
    },
])
ReactDOM.render(
<>

<RouterProvider router={router} >
    
</RouterProvider>


</>, document.getElementById("root"));