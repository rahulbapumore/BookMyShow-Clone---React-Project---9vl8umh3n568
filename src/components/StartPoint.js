

import React, { useEffect ,useState} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import About from "./About";
import Movie from "./Movie";
import Navbar from "./Navbar";
import Login from "./Login";
import SignUp from "./SignUp";
import Book from "./Book";
import ErrorPage from "./ErrorPage";
import { onAuthStateChanged } from "firebase/auth";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider,Outlet } from "react-router-dom";
import {auth,db} from './Database'
import { HashRouter } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom";
import authContext from "./Context";
import { authContext1 } from "./Context";
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
                    {
                        path: "/book",
                        element: <Book />,
                        
                    },

        ],
    },
    {
        path: "/*",
        element: <ErrorPage />,
        
    },
])


const StartPoint = () => {
    
    const [authobj,setAuthobj]=useState(null);
    const [authobj1,setAuthobj1]=useState({search: ''});
    useEffect(() => {
        const handleAuthChange = (user) => {
          if (user) {
            setAuthobj(user);
            return;
          }
    
          setAuthobj(null);
        };
    
        const unsubscribe = onAuthStateChanged(auth, handleAuthChange);
    
        return () => unsubscribe();
      }, [authobj]);

      
    return (
        <authContext1.Provider value={{authobj1,setAuthobj1}}>
        <authContext.Provider value={{authobj,setAuthobj}}>
            <RouterProvider router={router} >
            
            </RouterProvider>
        </authContext.Provider>
        </authContext1.Provider>
    )


}

export default StartPoint;