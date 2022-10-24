import React from 'react';
import "./verifyemail.scss";
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Verifyemail = () => {
  return (
    <div className='verify' >
        <div className='banner' >
          KHAC NHU ADMIN
          <div className = "bannerQr" >
            <img src = {"/images/maqr.png"} alt = "bannerImage" className='imageRegister' />

          </div>

          <img src = {"/images/facebook.png"} alt = "bannerImage" className='imageRegister' />
          <img src = {"/images/instagram.jpg"} alt = "bannerImage" className='imageRegister' />
          <img src = {"/images/chplay.png"} alt = "bannerImage" className='imageRegister' />
        </div>

        <div className='verifyEmail' >
            <h2>Verify Email ???</h2>
            <label htmlFor='email'>Email:</label>
            <input id = "email" type = "text" placeholder='type your email ...'/>
            <br></br>
            <button type = "submit" >Submit</button>
            
            <div className = "footer" >
                <Link to = "/" className = "home" ><AiOutlineHome/> Home</Link>
                <Link to = "/login" className = "login">Login ???</Link>
              

            </div>
        </div>

    </div>
  )
}
