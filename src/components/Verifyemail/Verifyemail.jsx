import React, {useState, useEffect, useRef} from 'react';
import "./verifyemail.scss";
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Verifyemail = () => {
  const emailRef = useRef()
  const [verifyEmail, setVerifyEmail] = useState("")


  
  useEffect(() => {
    emailRef.current.focus();
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault()
    
    

  }

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
            <form onSubmit={handleSubmit} >
              <h2>Verify Email ???</h2>
              <label htmlFor='email'>Email:</label>
              <input ref = {emailRef} value = {verifyEmail} onChange = {(e)=>setVerifyEmail(e.target.value)}  id = "email" type = "text" placeholder='type your email ...'/>
              <br></br>
              <button type = "submit" disabled = {!verifyEmail ? true : false} >Submit</button>
            </form>
            
            <div className = "footer" >
                <Link to = "/" className = "home" ><AiOutlineHome/> Home</Link>
                <Link to = "/login" className = "login">Login ???</Link>
              

            </div>
        </div>

    </div>
  )
}
