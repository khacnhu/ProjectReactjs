import React, { useState, useEffect, useRef } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
// AiOutlineHome
// FcGoogle
// FaUserCircle
// RiLockPasswordLine

export const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
  
  useEffect(()=> {
    emailRef.current.focus()
  }, [])


  useEffect(()=>{
    setErrMsg("")
  }, [email, password])

  // const [validEmail, setValidEmail] = useState(false);
  // const [emailFocus, setEmailFocus] = useState(false);

  // const [validPassword, setValidPassword] = useState(false);
  // const [passwordFocus, setPasswordFocus] = useState(false);



  const handleSubmit = (event) => {
    event.preventDefault()

    try {
      console.log(email, password)
      setEmail("")
      setPassword("")
      setSuccess(true)
    } catch (error) {
      setErrMsg("Lỗi trong lúc điền form")
      errRef.current.focus();
    }


  }


  return (
    <>
    {
      success ? (
        <section>
        <h1>You are logged in!</h1>
        <br />
        <p>
            <Link to = "/" style={{textDecoration: "none"}} >HOME</Link>
        </p>
    </section>
      ) : (

        <div className="loginForm">
      <div className="banner">
        KHAC NHU ADMIN
        <div className="bannerQr">
          <img
            src={"/images/maqr.png"}
            alt="bannerImage"
            className="imageRegister"
          />
        </div>
        <img
          src={"/images/facebook.png"}
          alt="bannerImage"
          className="imageRegister"
        />
        <img
          src={"/images/instagram.jpg"}
          alt="bannerImage"
          className="imageRegister"
        />
        <img
          src={"/images/chplay.png"}
          alt="bannerImage"
          className="imageRegister"
        />
      </div>
      <div className="login">
        <form onSubmit = {handleSubmit} >
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h2>LOGIN FORM</h2>
          <label htmlFor="email">Email:</label>
          <input
                            type="text"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder = "type your email..."
                            value={email}
                            required
                        />
          <br></br>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            placeholder="type your password ..."
            id="password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}

            autoComplete = "off"
            required 
          />
          <br></br>
          <button type="submit">Login</button>
          <div className="loginHeader">
            <Link to="/register" className="register">
              <FaUserCircle />{" "}
              <span className="registerTitle">Create a new User</span>
            </Link>
            <Link to="/" className="home">
              <AiOutlineHome /> <span className="homeTitle">Home</span>
            </Link>
            <p className="googleLogin">
              <FcGoogle /> <span className="googleTitle">Google Login</span>
            </p>
            {/* <p className='forgotPassword' ><RiLockPasswordLine/> <span className='forgotTitle'>Forgot password ???</span></p> */}
            <Link to="/verifyEmail">
              {" "}
              <RiLockPasswordLine />{" "}
              <span className="forgotTitle">Forgot password ???</span>{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
      )
    }
    </>
  );
};
