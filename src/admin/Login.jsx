import React from 'react'
import { Navigate } from 'react-router-dom';

const isAuthenticated= localStorage.getItem
("isAuthenticated") === "true";
if (isAuthenticated) {
    return <Navigate to="/admin" />;
}


const Login = () => {
  return (
    <div>
        <h2>Login</h2>
        <Navigate to="/admin" />
    </div>
  )
}

export default Login