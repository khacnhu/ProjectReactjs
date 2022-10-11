import React, { useState } from 'react'
import "./datatable.scss"
import { userRows } from '../../dataTableSource'
// import { Link } from 'react-router-dom'
// import { Single } from '../../pages/Single/Single'
import { AiOutlineArrowDown, AiOutlineArrowUp }from 'react-icons/ai';


export const Datatable = () => {
    
    const [users, setUsers] = useState(userRows)

    const deleteUser = (user)=>{
        let newUsers = users.slice()
        setUsers(newUsers.filter(item =>{
            return item.id !== user.id
        }
        ))
    }

   const Refresh = () => {
        setUsers(userRows)
   } 

    const SearchUser = () => {
        let inputUser = document.getElementById("inputUser")
        let newUsers = users.slice()
        setUsers(newUsers.filter(user => {
            return user.username.includes(inputUser.value)
        } ))
    }
    const SearchEmail = () => {
        let inputEmail = document.getElementById("inputEmail")
        let newUsers = users.slice()
        setUsers(newUsers.filter(user => {
            return user.email.includes(inputEmail.value)
        } ))
    }
    const SearchAge = () => {
        let inputAge = document.getElementById("inputAge")
        let newUsers = users.slice()
        setUsers(newUsers.filter(user => {
            return user.age === inputAge.value*1
        } ))
    }

    const SearchStatus = () => {
        let inputStatus = document.getElementById("inputStatus")
        let newUsers = users.slice()
        setUsers(newUsers.filter(user => {
            return user.status.includes(inputStatus.value)
        } ))
    }

    const SortAgeUp = () =>{
        let newUsers = users.slice()
        setUsers(newUsers.sort((a,b) =>{
            if (a.age < b.age) {
                return -1;
            }
            return 1; 
        } 
        ))
    } 

    const SortAgeDown = () => {
        let newUsers = users.slice()
        setUsers(newUsers.sort((a,b) =>{
            if (a.age > b.age) {
                return 1;
            }
            return -1; 
        } 
        ))
    }

    const SortUserDown = () => {
        let newUsers = users.slice()
        setUsers(newUsers.sort((a,b) =>{
            if (a.username < b.username) {
                return -1;
            }
            if (a.username > b.username) {
                return 1;
            }
            return 0;
        }
        ))
    }

    const SortUserUp = () => {
        let newUsers = users.slice()
        setUsers(newUsers.sort((a,b) =>{
            if (a.username > b.username) {
                return 1;
            }
            if (a.username < b.username) {
                return -1;
            }
            return 0;
        }
        ))
    }

    const SortIdUp = () => {
        let newUsers = users.slice()
        setUsers(newUsers.sort((a,b)=>{
            return ( Number(a.id) > Number(b.id*1))
            // if (a.id > b.id) {
            //     return 1;
            // }
            // return 0;
        }))
    }

    const SortIdDown = () => {
        let newUsers = users.slice()
        setUsers(newUsers.sort((a,b) => {
            return (Number(a.id) < Number(b.id))

        }
            // if (a.id < b.id) {
            //     return -1;
            // }
            // return 0;
        ))
    }

    const SortEmailDown = () => {
        let newUsers = users.slice()
        setUsers(newUsers.sort((a,b) => {
           return (a.email < b.email)
            // if (a.id < b.id) {
            //     return -1;
            // }
            // return 0;
        }))
    }

    const SortEmailUp = () => {
        let newUsers = users.slice()
        setUsers(newUsers.sort((a,b) => {
           return (a.email > b.email)
            // if (a.id < b.id) {
            //     return -1;
            // }
            // return 0;
        }))
    }


    return (
        <div className = "datatable" >
            <div className='dataHeader' >
                User
                <button onClick = {Refresh} >Danh sách khách hàng</button>
            </div>
{/*             
            <button onClick={SortAge}>SortAge</button>
            <button onClick={SortUser} > SortUser </button> */}

            <div className = "dataSearch" >
                {/* <div>
                    <input type = "text" id = "inputId" />
                    <br></br>
                    <button onClick = {SearchId} >SearchId</button>
                </div> */}
                <div className = "inputSearch" >
                    <input type = "text" id = "inputUser" placeholder = "type User ..." />
                    <br></br>
                    <button onClick = {SearchUser} >SearchUser</button>
                </div>
                <div className = "inputSearch" >
                    <input type = "text" id = "inputEmail" placeholder = "type Email ..." />
                    <br></br>
                    <button onClick = {SearchEmail} >SearchEmail</button>
                </div>
                <div className = "inputSearch" >
                    <input type = "text" id = "inputAge" placeholder = "type Age ... " />
                    <br></br>
                    <button onClick = {SearchAge} >SearchAge</button>
                </div>
                <div className = "inputSearch" >
                    <input type = "text" id = "inputStatus" placeholder= "type Status ... " />
                    <br></br>
                    <button onClick = {SearchStatus} >SearchStatus</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                            <AiOutlineArrowDown onClick={SortIdDown} className = "iconDown" />
                            <AiOutlineArrowUp onClick={SortIdUp}  className = "iconUp" />
                        </th>
                        <th>
                            USER
                            <AiOutlineArrowDown onClick={SortUserDown} className = "iconDown" />
                            <AiOutlineArrowUp onClick={SortUserUp} className = "iconUp" />
                        </th>
                        <th>
                            EMAIL
                            <AiOutlineArrowDown onClick={SortEmailDown} className = "iconDown" />
                            <AiOutlineArrowUp onClick={SortEmailUp} className = "iconUp" />
                        </th>
                        <th>
                            AGE
                            <AiOutlineArrowDown onClick={SortAgeDown} className = "iconDown" />
                            <AiOutlineArrowUp onClick={SortAgeUp} className = "iconUp" />
                        </th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key = {user.id} >
                                <td> {user.id} </td>
                                <td> {user.username} </td>
                                <td> {user.email} </td>
                                <td> {user.age} </td>
                                <td> {user.status} </td>
                                <td> <button onClick = {() => deleteUser(user)} >Delete</button> </td>

                            </tr>
                        ))
                    }
                
                </tbody>   
            </table>

        </div>

    )
}


