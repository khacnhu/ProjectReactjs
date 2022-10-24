import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { AiOutlineHome } from "react-icons/ai";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassowrd] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUserName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassowrd(PASSWORD_REGEX.test(password));
    setValidConfirmPassword(password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [username, email, password, confirmPassword]);

  //Cai nay thuong se xu ly khi co axios de tuong tac vs api backend
  const handleSubmit = (event) => {
    event.preventDefault();
    const checkUsername = USER_REGEX.test(username);
    const checkPassword = PASSWORD_REGEX.test(password);
    // const checkConfirmPassword = password === confirmPassword;

    if (!checkUsername || !checkPassword) {
      setErrMsg("INVALID ENTRY");
      return;
    }

    try {
      console.log(username, email, password, confirmPassword);
      setSuccess(true);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setErrMsg("ERROR IN FORM REGISTER");
      errMsg.current.focus();
      console.log(error);
    }
  };

  return (
    <div className="registerForm">
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

      <div class="register_content">
        <form onSubmit={handleSubmit}>
          <h2 className="registerTitle">REGISTER FORM</h2>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <label htmlFor="username">Username:</label>
          <input
            ref={userRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            placeholder="Type your username ..."
            autoComplete="off"
            required
            aria-invalid={validUserName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <br></br>
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="text"
            placeholder="Type your email ..."
            autoComplete="off"
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidEmail"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          <br></br>
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="text"
            placeholder="Type your password ..."
            autoComplete="off"
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="uidPassword"
            onFocus={() => setPasswordFocus(true)}
            onBlur = {() => setPasswordFocus(false)}
          />
          <br></br>
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input type="text" placeholder="Type your confirmpassword ..." />
          <br></br>
          <button id="btn_register">Register Account</button>
        </form>
        <div className="linkRegister">
          <Link to="/login" className="login">
            Login ???
          </Link>
          <Link to="/" className="home">
            <AiOutlineHome style={{ marginRight: "4px" }} /> HOME
          </Link>
        </div>
      </div>
    </div>
  );
};
