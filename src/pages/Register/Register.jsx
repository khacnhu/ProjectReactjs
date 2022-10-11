import React from 'react'
import { Link } from 'react-router-dom'
import "./register.scss"
import { AiOutlineHome } from 'react-icons/ai';


export const Register = () => {
  return (
    <div  className = "registerForm" >
        <div className='banner' >
          KHAC NHU ADMIN
          <div className = "bannerQr" >
            <img src = {"/images/maqr.png"} alt = "bannerImage" className='imageRegister' />

          </div>

          <img src = {"/images/facebook.png"} alt = "bannerImage" className='imageRegister' />
          <img src = {"/images/instagram.jpg"} alt = "bannerImage" className='imageRegister' />
          <img src = {"/images/chplay.png"} alt = "bannerImage" className='imageRegister' />
        </div>

        <div class="register_content">
          <form>

            <h2 className='registerTitle' >REGISTER FORM</h2>
            <p>Username:</p>
            <input type = "text" placeholder="Type your username ..."/>
            <p>Email:</p>
            <input type="text" placeholder="Type your email ..."/>
            <p>Password:</p>
            <input type="text" placeholder="Type your password ..."/>
            <p>Confirm Password:</p>
            <input type="text" placeholder="Type your confirmpassword ..."/>
            <br/>
            <button id = "btn_register" type = "submit">Register Account</button>
          </form>
            <div className='linkRegister'>
                <Link to = "/login" className = "login" >Login ???</Link>
                <Link to = "/" className = "home" ><AiOutlineHome style = {{marginRight: "4px"}} /> HOME</Link>

            </div>

        </div>

    </div>
  )
}
