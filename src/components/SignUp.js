import React, { useState } from 'react';

import {Form,Link,useNavigate} from 'react-router-dom';


const SignUp = () => {

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    
    function changeEmail(e)
    {
        setEmail(e.target.value);
    }
    function changePass(e)
    {
        setPass(e.target.value);
    }

    

    const onSignUp = (e) =>
    {
        e.preventDefault();
        console.log("Hi");
    }
    return (
        <>

            <Form onSubmit={onSignUp} style={{margin: 2,display: 'flex',flexDirection: 'column' ,justifyContent: 'center',alignItems: 'center',fontSize: '14pt'}}>
                <h1>Log in!</h1>
                <input type="text" onChange={changeEmail} style={{fontSize:'25pt',margin: 4}} name="name" />
                
                <input type="email" onChange={changeEmail} style={{fontSize:'25pt',margin: 4}} name="title" />
                <input type="password" onChange={changePass} name="description" style={{fontSize:'25pt',margin: 4}}/>
                <button type="submit" style={{fontSize:'25pt',margin: 4}}>Sign Up</button>
                <h4>Already have an account?<Link to="/login">Log in</Link></h4>
            </Form>
                            
        </>
    )
}

export default SignUp;