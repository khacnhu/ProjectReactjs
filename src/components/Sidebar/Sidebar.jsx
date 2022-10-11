import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (

    <div className = "sidebar">
        <div className='top'>
            <Link to = "/" style = {{textDecoration: "none"}} >
              <span className='logo' >KHACNHU ADMIN</span>
            </Link>
        </div>

        <div className='center'>
           <ul>
                <p className="title">MAIN</p>
                <li>
                  <DashboardIcon className = "icon"/>
                  <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to = "/users" style = {{textDecoration: "none"}} >
                  <li>
                    <PersonOutlineOutlinedIcon className = "icon"/>
                    <span>Users</span>
                  </li>
                </Link>


                <Link to = "/products" style = {{textDecoration: "none"}} >
                  <li>
                  <StoreIcon className="icon" />
                      <span>Products</span>
                  </li>
                </Link>

                <li>
                  <CreditCardIcon className="icon" />
                    <span>Orders</span>
                </li>

                <li>
                  <LocalShippingIcon className="icon" />
                  <span>Delivery</span>
                </li>
                
                <p className="title">USEFUL</p>
                <li>
                <InsertChartIcon className="icon" />
                <span>Stats</span>
                </li>

                <li>
                  <NotificationsNoneIcon className="icon" />
                  <span>Notifications</span>
                </li>

                <p className="title">SERVICE</p>
                <li>
                <SettingsSystemDaydreamOutlinedIcon className="icon" />
                <span>System Health</span>
                </li>

                <li>
                  <PsychologyOutlinedIcon className="icon" />
                  <span>Logs</span>
                </li>

                <li>
                <SettingsApplicationsIcon className="icon" />
                <span>Settings</span>
                </li>

                <p className = "title">USER</p>
                <li>
                <AccountCircleOutlinedIcon className="icon" />
                <span>Profile</span>
                </li>
                
                <li>
                <ExitToAppIcon className="icon" />
                <span>Logout</span>
                </li>
           </ul>

        </div>
        <div className='bottom'>
          <div className="colorOptions"></div>
          <div className="colorOptions"></div>
          <div className="colorOptions"></div>
        </div>

    </div>
  )
}



