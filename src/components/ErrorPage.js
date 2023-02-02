import React from 'react';
import {Link} from 'react-router-dom';
const ErrorPage = () => {;
    return (
        <>
            <div style={{display:'flex',alignItems: 'center',justifyContent: 'center',flexDirection:'column'}}>
                <div><h1>404 Page Not Found</h1></div>
                <div><Link to="/">Go to home</Link></div>
            </div>
        </>
    )


}


export default ErrorPage