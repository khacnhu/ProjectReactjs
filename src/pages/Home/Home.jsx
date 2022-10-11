import React from "react";
import "./home.scss"
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import { Widget } from "../../components/Widget/Widget";
import { Chart } from "../../components/Chart/Chart";
import { Featured } from "../../components/Featured/Featured";
import { Table } from "../../components/Table/Table";

const HOME = () =>{
    return(
        <div className="home" >
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className = "widgets" >
                    <Widget type = "user" />
                    <Widget type = "order" />
                    <Widget type = "earning" />
                    <Widget type = "balance" />
                    
                </div>

                <div className = "charts" >
                    <Featured/>
                    <Chart aspect = {2 / 1} title = {"TABLE IN 6 MONTHS"} />

                </div>

                <div className = "listContainer" >
                    <div className = "listTitle" style = {{ textAlign: "center", fontSize: "24px" }} > Latest Transactions</div>
                    <Table/>
                </div>


            </div>
        </div>
    )
}

export default HOME