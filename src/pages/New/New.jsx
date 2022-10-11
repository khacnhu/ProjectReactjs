import React from 'react';
import "./new.scss";
import { Sidebar } from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


export const New = () => {
  return (
    <div className="new" >
      <Sidebar/>
      <div className="newContainer" >
        <Navbar/>
        <div className = "top" >
          <h1 className = "h1Title" >UPDATE USER</h1>
        </div>

        <div className = "bottom" >
          <div className = "left">
            <img src = {"/images/camera.jpg"} alt = "mayanhAvatar" />
          </div>
          <div className = "right" >
            <form className = "form">
              <div className = "formInput">
                <label htmlFor = "file">Image: <DriveFolderUploadOutlinedIcon className = "icon" /></label>
                <input type = "file" id = "file" style = {{display: "none"}} />
              </div>
              <div className = "formInput" >
                <label>Username</label>
                <input type = "text" placeholder = "Nhap username"  />
              </div>

              <div className='formInput' >
                <label>Lastname</label>
                <input type = "text" placeholder='Nhap Lastname' />
              </div>

              <div className = "formInput" >
                <label>Email</label>
                <input type = "text" placeholder = "Nhap Email" />
              </div>

              <div className='formInput' >
                <label>Phone</label>
                <input type = "text" placeholder = "Nhap Phone"  />
              </div>

              <div className = "formInput">
                <label>Password</label>
                <input type = "text" placeholder='Nhap Password'/>
              </div>

              <div className='formInput' >
                <label>Address</label>
                <input type = "text" placeholder='Nhap Address' />
              </div>

              <div className = "formInput" >
                <label>Country</label>
                <input type = "text" placeholder='Nhap Country' />
              </div>

              <button type = "submit" >SAVE</button>
            
            </form>
            
          </div>  
        </div>

      </div>
    </div>
  )
}
