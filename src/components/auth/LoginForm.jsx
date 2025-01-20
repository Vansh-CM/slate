import React, { useState } from 'react'
import { login } from './authSlice';
import { combineSlices } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
    const [email ,  setEmail] = useState('');
    const [password ,  setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passErr , setPassErr] = useState("")
    const [showPopup, setShowPopup] = useState(false);
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
   const handlePopupYes=()=>{
    setShowPopup(false)
   }
    const hendleSubmit=(e)=>{
            e.preventDefault()
            setShowPopup(true)
            // let data = dispatch(login({email : email , password : password}))
            // console.log(data , "api response")
    }
  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="flex flex-col justify-center items-center max-w-md w-full m-5 border shadow-2xl p-6 bg-white">
    <h3 className="text-orange-950 m-2 text-xl">Welcome</h3>
    <div className="w-full flex flex-col m-5 p-4 bg-slate-50">
      <span className="ml-2 p-2">Email</span>
      <input onBlur={(e) => hendleEmailChange(e)} className="m-2 p-2" type="email" placeholder="Enter Email" />
      <span>{emailError && <p className="text-red-500">{emailError}</p>}</span>

      <span className="ml-2 p-2">Password</span>
      <input onBlur={(e) => hendlePasswordChange(e)} className="m-2 p-2" type="password" placeholder="Enter Password" />
      <span>{passErr && <p className="text-red-500">{passErr}</p>}</span>

      <button onClick={(e) => hendleSubmit(e)} className="m-2 p-2 bg-orange-500 text-white rounded hover:bg-orange-600">
        Log In
      </button>
    </div>
  </div>
  {showPopup && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-25">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl">Are you sure you want to log in?</h3>
                        
                        <div className="mt-4">
                            <button
                                onClick={handlePopupYes}
                                className="mr-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Yes
                            </button>
                            <button
                                // onClick={handlePopupNo}
                                className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
  <div>
<canvas id="canvas" width="500" height="500"></canvas>
<div id="dropArea">
    Drag and drop an image here
</div>
</div>
</div>
  )
}

export default LoginForm
