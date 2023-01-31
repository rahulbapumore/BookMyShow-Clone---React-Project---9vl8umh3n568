import React, { useState } from 'react';

import {Form,Link,useNavigate} from 'react-router-dom';
import {auth} from './Database'
import {  signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const navigate = useNavigate();
    function changeEmail(e)
    {
        setEmail(e.target.value);
    }
    function changePass(e)
    {
        setPass(e.target.value);
    }



    const onLogin = (e) =>
    {
        e.preventDefault();

        

        
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    return (
        <>

            <Form onSubmit={onLogin} style={{margin: 2,display: 'flex',flexDirection: 'column' ,justifyContent: 'center',alignItems: 'center',fontSize: '14pt'}}>
                <h1>Log in!</h1>
                <input type="email" onChange={changeEmail} style={{fontSize:'25pt',margin: 4}} name="title" />
                <input type="password" onChange={changePass} name="description" style={{fontSize:'25pt',margin: 4}}/>
                <button type="submit" style={{fontSize:'25pt',margin: 4}}>Log In</button>
                <h4>Create an account <Link to="/signup">Sign up</Link></h4>
            </Form>
                            
        </>
    )
}

export default Login;