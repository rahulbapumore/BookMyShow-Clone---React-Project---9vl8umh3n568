import React, { useState,useEffect,useContext } from 'react';
import authContext from "./Context";

import { useParams ,useNavigate} from 'react-router-dom';
const Book = () => {
    const navigate = useNavigate();
    const {authobj,setAuthobj} = useContext(authContext);
    
    const params = useParams();
    
    
    useEffect(() => {
        if(!authobj)
        {
            
            navigate("/");
        }
    }, [])
    return (
        <h1>
            <p>Congratulations your ticket is booked !</p>
            <p>Name: Rahul more</p>
            <p>Email: rahulbapumore@gmail.com</p>
            <p>Movie name: Wakanda</p>
    <p>Seat No. {Math.floor(Math.random()*100)}</p>

        </h1>
    )
}

export default Book;