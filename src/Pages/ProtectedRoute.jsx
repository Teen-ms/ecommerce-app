import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes(props) {
    const { Comp, ...restproprs } = props;
    const isLogin = localStorage.getItem("token");

    if (!isLogin) {
        return <Navigate to='/login' />;  // Correctly navigating to login
    } else {
        return <Comp {...restproprs} />;  // Correct JSX syntax with space
    }
}

export default ProtectedRoutes; 
