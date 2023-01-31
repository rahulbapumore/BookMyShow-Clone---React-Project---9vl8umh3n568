import React, { useState,useEffect } from 'react';

import {Form,Link,useNavigate} from 'react-router-dom';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  onAuthStateChanged } from "firebase/auth";
import {auth,db} from './Database'
import { collection, addDoc } from "firebase/firestore"; 



const SignUp = () => {

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [name,setName] = useState("");
    const navigate = useNavigate();
    function changeEmail(e)
    {
        setEmail(e.target.value);
    }
    function changePass(e)
    {
        setPass(e.target.value);
    }

    function changeName(e)
    {
        setName(e.target.value);
    }

    const onSignUp = (e) =>
    {
        e.preventDefault();
        

        createUserWithEmailAndPassword(auth, email, pass)
        .then(async (userCredential) => {
            const docRef = await addDoc(collection(db, "users"), {
                "uid": userCredential.user.uid,
                "name": name,
                "email": email,
              });
              navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    


    return (
        <>

            <Form onSubmit={onSignUp} style={{margin: 2,display: 'flex',flexDirection: 'column' ,justifyContent: 'center',alignItems: 'center',fontSize: '14pt'}}>
                <h1>Sign in!</h1>
                <input type="text" onChange={changeEmail} onChange={changeName} style={{fontSize:'25pt',margin: 4}}  />
                
                <input type="email" onChange={changeEmail} style={{fontSize:'25pt',margin: 4}}  />
                <input type="password" onChange={changePass} style={{fontSize:'25pt',margin: 4}}/>
                <button type="submit" style={{fontSize:'25pt',margin: 4}}>Sign Up</button>
                <h4>Already have an account?<Link to="/login">Log in</Link></h4>
                
            </Form>
                            
        </>
    )
}

export default SignUp;