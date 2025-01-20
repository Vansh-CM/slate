


import React, { useState } from 'react'
import {  signup } from './authSlice';
import { combineSlices } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const RagistorUser = () => {
    const [email ,  setEmail] = useState('');
    const [password ,  setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passErr , setPassErr] = useState("")
    const dispatch = useDispatch()
    const hendleEmailChange =(e)=>{
         e.preventDefault()
         if(e.target.value.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")){

             setEmail(e.target.value)
             setEmailError('')
         }else{
           setEmailError("Please enter a valid email address")
         }
  
    }
    const hendlePasswordChange =(e)=>{
        e.preventDefault()
        if(e.target.value.length >= 0){

            setPassword(e.target.value)
            setPassErr("")
            
        }else{
            setPassErr("Password must contain at least 8 characters, including upper/lowercase letters, a number, and a special character.")
        }
    }

    const hendleSubmit=(e)=>{
            e.preventDefault()
            let data = dispatch(signup({email : email , password : password}))
            console.log(data , "api response")
    }
  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="flex flex-col justify-center items-center max-w-md w-full m-5 border shadow-2xl p-6 bg-white">
    <h3 className="text-orange-950 m-2 text-xl">Sign Up</h3>
    <div className="w-full flex flex-col m-5 p-4 bg-slate-50">
      <span className="ml-2 p-2">Email</span>
      <input onBlur={(e) => hendleEmailChange(e)} className="m-2 p-2" type="email" placeholder="Enter Email" />
      <span>{emailError && <p className="text-red-500">{emailError}</p>}</span>
      <span className="ml-2 p-2">Password</span>
      <input onBlur={(e) => hendlePasswordChange(e)} className="m-2 p-2" type="password" placeholder="Enter Password" />
      <span>{passErr && <p className="text-red-500">{passErr}</p>}</span>
      <button onClick={(e) => hendleSubmit(e)} className="m-2 p-2 bg-orange-500 text-white rounded hover:bg-orange-600">Sign Up</button>
    </div>
  </div>
</div>
  )
}

export default RagistorUser