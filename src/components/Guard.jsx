import React from 'react'
import { Navigate } from 'react-router-dom';

const Guard = ({ children }) => {
    
    const user = JSON.parse(localStorage.getItem("userData"));

    if (user?.token) return children;
    else return <Navigate to="/" />
 
}

export default Guard
