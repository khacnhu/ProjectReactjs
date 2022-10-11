import React from 'react';
import "./single.scss";
import { Sidebar } from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import { Chart } from "../../components/Chart/Chart";
import { Datatable } from '../../components/Datatable/Datatable';

export const Single = () => {
  return (
    <div className = "single" >
    <Sidebar/>
    <div className='singleContainer' >
        <Navbar/>
        <div className = "top">
          <div className = "left">
            <h1 className = "title">INFORMATION</h1>
            <div className = "item">
              <img
                src = {"/images/avatar1.jpg"}
                alt = "hinhanhavatar"
                className='itemImg'
              />

              <div className = "details" >
                <h1 className = "itemTitle" >Nhu Tran</h1>
                <div className = "itemKey">
                  <span className = "itemKey" >Email: </span>
                  <span className = "itemValue" >tknhu1302@gmail.com</span>

                </div>

              <div className = "detailItem" >
                <span className='itemKey' >Phone: </span>
                <span className='itemValue' >+84 34 661 6800</span>
              </div>

              <div className = "detailItem" >
                <span className = "itemKey" >Address: </span>
                <span className = "itemValue" >24/7 Truong Trinh Street Phuong 2 Tuy Hoa City Phu Yen Province</span>
              </div>

              <div className='detailItem' >
                <span className='itemKey' >Country: </span>
                <span className='itemValue' >USA</span>
              </div>

              </div>

            </div>
          </div>
          
          <div className = "right" >
            <Chart aspect = {2/1} title={"USER SPEND 6 MONTHS"} />
          </div>

        </div>

        <div className = "bottom" >
          <h1 className = "title" style = {{textAlign: "center"}} >Last Transactions</h1>
          <Datatable/>
        </div>
    </div>

  
  </div>
  )
}
