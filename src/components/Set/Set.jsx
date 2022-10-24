import React from 'react'
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import "./set.scss";
import {Link} from "react-router-dom";

export const Set = () => {
  return (
    <div className = "set" >
        <Sidebar/>
        <div className = "setContainer">
            <Navbar/>
            <div className = "setHeader" >
                <div className = "setHeaderAcount" >
                    <p className = "setMyAcount" >Acount</p>
                    <p className = "setDescription" >
                        When you appear in my dashboard , you can choose what you want to follow
                    </p>
                </div>
                <div className = "setImageHeader" >
                    <img  src = {"/images/anhsao.jpg"} alt = "logoImage" className = "setAvatar" />
                </div>

            </div>
            <div className = "hrOne"></div>
            <div className = "setMiddle" >
                <div>
                    <p className = "setDashboard" >Dashboard of Khac Nhu Admin</p>
                    <p className = "setDashDescription" >
                        It's is the public event when you access to my dashboard, We hope you enjoy that moment
                    </p>
                </div>

                <div className = "setList" >
                    <ul>
                        <li>Advance Settings</li>
                        <li>Online</li>
                        <li>Function of Dashboard</li>
                        <li>Notifications</li>
                        <li>Private Previlige</li>
                    </ul>
                </div>
            </div>
            <div className = "hrTwo" ></div>
            <div className = "setFooter" >
                <div className = "setAccount" >
                    <p>My Account</p>
                    <Link to = "/changepassword" className = "setAccountPass" style = {{textDecoration: "none"}} >Change Passowrd ??? </Link>
                    {/* <p className = "setAccountPass" >Change Password ??? </p> */}
                </div>
                <div className = "setVipCustomer">
                    <p className = "setPosition" >Position of Customer</p>
                    <p>
                        <span>You are not vip Customer</span> |
                        <span>You should register Preminum in my Dashboard</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
