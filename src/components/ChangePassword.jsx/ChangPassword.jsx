// 


import React from "react";
import "./changepassword.scss"


export const ChangePassword = () => {
  return (
    <div className="reset">
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

        <div className="resetForm">

            <form  >
                <h2 className="registerTitle">CHANGE PASSWORD</h2>
                <label htmlFor="newpassword" >Old Password:</label>
                <input id = "newpassword" type="text" placeholder="Type your password ..." />
                <br></br>
                <label htmlFor="newpassword" >New Password:</label>
                <input id = "newpassword" type="text" placeholder="Type your password ..." />
                <br></br>
                <label htmlFor = "confirmpasword" >Confirm Password:</label>
                <input id = "confirmpassword" type="text" placeholder="Type your confirmpassword ..." />
                <br></br>
                <button type="submit">
                    Change Password
                </button>
            </form>

        </div>
    </div>
  );
};
