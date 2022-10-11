import React from 'react'
import "./login.scss"
import {Link} from "react-router-dom"
import { FaUserCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineHome } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
// AiOutlineHome
// FcGoogle
// FaUserCircle
// RiLockPasswordLine


export const Login = () => {
  return (
    <div className = "loginForm">
      {/* <div className='loginHeader' >
      </div> */}
      <div className = "login" >
          <h2>LOGIN FORM</h2>
          <p>Email:</p>
          <input type = "text" placeholder='type your email ...'/>
          <p>Password:</p>
          <input type = "text" placeholder='type your password ...'/>
          <br></br>
          <button type = "submit">Login</button>
          <div className = "loginHeader" >
            <Link to = "/register" className='register' > 
             <FaUserCircle/> <span className='registerTitle'>Create a new User</span> 
            </Link>
            <Link to = "/" className='home' ><AiOutlineHome/> <span className='homeTitle' >Home</span></Link>
            <p className='googleLogin' ><FcGoogle/> <span className='googleTitle' >Google Login</span></p>
            <p className='forgotPassword' ><RiLockPasswordLine/> <span className='forgotTitle'>Forgot password ???</span></p>
          </div>
      </div>
    </div>
  )
}
