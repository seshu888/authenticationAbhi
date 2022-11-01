import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
 const AuthContext=React.createContext({

 
    login:(val)=>{},
    logout:()=>{},
    getApi:()=>{},
    apiData:null,

    token:null
});
export const AuthContextProvider=(props)=>{
 const [token,setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):null)
  const [countryData,setCountryData]=useState(null)
    const loginHandler=(val)=>{
   
        localStorage.setItem("token",val)
        setToken(val)
    }
    const logoutHandler=()=>{
        localStorage.clear(); 
       setToken(null)
    };
    const getApi=()=>{
        axios.get("https://restcountries.com/v3.1/all")
        .then(resp=>setCountryData(resp.data))
    }
    const contextValue={
    
     token:token,
        login:loginHandler,
        logout:logoutHandler,
        getApi:getApi,
        apiData:countryData
    }
   
   
   
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext