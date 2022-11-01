import React, { useContext } from 'react'
import AuthForm from './AuthForm'
import { Navigate, Outlet } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import {  Route,Routes } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
const ProtectedRoutes = () => {

    const {token} = useContext(AuthContext)
console.log(token)
    return(
      
                token?<Outlet/>:<AuthForm/>
            
    
    )
}

export default ProtectedRoutes