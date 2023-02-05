import React, { useState,useEffect,useContext } from 'react';

import {Form,Link,useNavigate} from 'react-router-dom';
import {auth} from './Database'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import authContext from "./Context";
import { authContext1 } from "./Context";

const Login = () => {

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const navigate = useNavigate();
    const {authobj,setAuthobj} = React.useContext(authContext);
    const {authobj1,setAuthobj1} = useContext(authContext1);
    
    
    if(authobj)
    {
        
        setAuthobj1({...authobj1,search: ''})
        navigate("/");
    }    
    useEffect(() => {

        setAuthobj1({...authobj1,search: null})
        console.log(authobj);

    }, [])
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
            
            setAuthobj(userCredential.user)
              
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
                <h4>Create an account <Link  to="/signup">Sign up</Link></h4>
            </Form>
                            
        </>
    )
}

export default Login;