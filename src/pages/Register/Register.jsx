import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { AiOutlineHome } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
// import useNavigate from "react-router-dom";


//Cai Regex dùng để validate các username password 
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

    let ListUsername = [
      "trankhacnhu",
      "tranhauthien",
      "tranbaobach",
      "vothihongnhu",
      "nguyennhuquynh",
    ];

    try {
      // console.log(username, email, password, confirmPassword);
      const checkUser = ListUsername.includes(username);

      if (!checkUser) {
        setSuccess(true);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        ListUsername.push(username);
        console.log(ListUsername);
      } else {
        setErrMsg("Username đã có người đăng ký");
      }
    } catch (error) {
      setErrMsg("ERROR IN FORM REGISTER");
      errMsg.current.focus();
      console.log(error);
    }
  };

  return (
    <>
      {success ? (
        <section className="SuccessContent">
          <h1>Success!</h1>
          <p>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login Account
            </Link>
          </p>
        </section>
      ) : (
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
              <label htmlFor="username">
                Username:
                <FaCheck
                  className={validUserName && username ? "valid" : "hide"}
                />
                <FaTimes
                  className={validUserName || !username ? "hide" : "invalid"}
                />
              </label>
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
              <p
                id="uidnote"
                className={
                  userFocus && !validUserName && username
                    ? "instructions"
                    : "offscreen"
                }
              >
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
              <br></br>
              <label htmlFor="email">
                Email:
                <FaCheck className={validEmail && email ? "valid" : "hide"} />
                <FaTimes
                  className={validEmail || !email ? "hide" : "invalid"}
                />
              </label>
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
              <p
                id="uidEmail"
                className={
                  emailFocus && !validEmail && email
                    ? "instructions"
                    : "offscreen"
                }
              >
                Email cua ban phai co @gmail.com
                <br />
              </p>
              <br></br>
              <label htmlFor="password">
                Password:
                <FaCheck
                  className={validPassword && password ? "valid" : "hide"}
                />
                <FaTimes
                  className={validPassword || !password ? "hide" : "invalid"}
                />
              </label>
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
                onBlur={() => setPasswordFocus(false)}
              />
              <p
                id="uidPassword"
                className={
                  passwordFocus && !validPassword && password
                    ? "instructions"
                    : "offscreen"
                }
              >
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters
                <br />
                Must a number and a special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
              <br></br>
              <label htmlFor="confirmpassword">
                Confirm Password:
                <FaCheck
                  className={
                    validConfirmPassword && confirmPassword ? "valid" : "hide"
                  }
                />
                <FaTimes
                  className={
                    validConfirmPassword || !confirmPassword
                      ? "hide"
                      : "invalid"
                  }
                />
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="confirmpassword"
                type="text"
                placeholder="Type your confirmpassword ..."
                autoComplete="off"
                required
                onFocus={() => setConfirmFocus(true)}
                onBlur={() => setConfirmFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  confirmFocus && !validConfirmPassword
                    ? "instructions"
                    : "offscreen"
                }
              >
                Must match the first password input field.
              </p>
              <br></br>
              <button
                id="btn_register"
                disabled={
                  !validUserName ||
                  !validEmail ||
                  !validPassword ||
                  !validConfirmPassword
                    ? true
                    : false
                }
              >
                Register Account
              </button>
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
      )}
    </>
  );
};
