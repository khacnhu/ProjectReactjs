import React, { useEffect, useState } from 'react';
import "./pagination.scss"
import ReactPaginate from 'react-paginate';
import { userRows } from "../../dataTableSource"
import { AiOutlineArrowDown, AiOutlineArrowUp }from 'react-icons/ai';


export const Pagination = ({itemsPerPage}) => {
    
    function Items({ currentItems }) {

        const [users, setUsers] = useState(currentItems)
        // console.log(users)

        const [searchUser, setSearchUser] = useState("")
        const [searchEmail, setSearchEmail] = useState("")
        const [searchAge, setSearchAge] = useState("")
        const [searchStatus, setSearchStatus] = useState("")


        const deleteUser = (user)=>{
            let newUsers = users.slice()
            setUsers(newUsers.filter(item =>{
                return item.id !== user.id
            }
            ))
        }

        const Refresh = () => {
                setUsers(currentItems)
        } 

        const SearchUser = () => {
            // let inputUser = document.getElementById("inputUser")
            let newUsers = users.slice()
            setUsers(newUsers.filter(user => {
                return user.username.includes(searchUser)
            } ))
        }
        const SearchEmail = () => {
            // let inputEmail = document.getElementById("inputEmail")
            let newUsers = users.slice()
            setUsers(newUsers.filter(user => {
                return user.email.includes(searchEmail)
            } ))
        }
        const SearchAge = () => {
            // let inputAge = document.getElementById("inputAge")
            // console.log(inputAge)
            let newUsers = users.slice()
            setUsers(newUsers.filter(user => {
                return user.age === searchAge*1
            } ))
        }

        const SearchStatus = () => {
            // let inputStatus = document.getElementById("inputStatus")
            let newUsers = users.slice()
            setUsers(newUsers.filter(user => {
                return user.status.includes(searchStatus.value)
            } ))
        }

      return (
        <>
            <div className = "datatable" >
            <div className='dataHeader' >
                <span>User</span>

                    <button onClick = {Refresh} >Danh sách khách hàng</button>
            </div>


            <div className = "dataSearch" >
              
                <div className = "inputSearch" >
                    <input type = "text" id = "inputUser" value = {searchUser} onChange = {(e) => setSearchUser(e.target.value) }  placeholder = "type User ..." />
                    <br></br>
                    <button onClick = {SearchUser} >SearchUser</button>
                </div>
                <div className = "inputSearch" >
                    <input type = "text" value = {searchEmail} onChange = {(e) => setSearchEmail(e.target.value)} id = "inputEmail" placeholder = "type Email ..." />
                    <br></br>
                    <button onClick = {SearchEmail} >SearchEmail</button>
                </div>
                <div className = "inputSearch" >
                    <input type = "text" value = {searchAge} onChange = {(e) => setSearchAge(e.target.value)} id = "inputAge" placeholder = "type Age ... " />
                    <br></br>
                    <button onClick = {SearchAge} >SearchAge</button>
                </div>
                <div className = "inputSearch" >
                    <input type = "text" value = {searchStatus} onChange = {(e) => setSearchStatus(e.target.value)} id = "inputStatus" placeholder= "type Status ... " />
                    <br></br>
                    <button onClick = {SearchStatus} >SearchStatus</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <td>
                            ID
                            <AiOutlineArrowDown className = "iconDown" />
                            <AiOutlineArrowUp className = "iconUp" />
                        </td>
                        <td>
                            USER
                            <AiOutlineArrowDown className = "iconDown" />
                            <AiOutlineArrowUp className = "iconUp" />
                        </td>
                        <td>
                            EMAIL
                            <AiOutlineArrowDown className = "iconDown" />
                            <AiOutlineArrowUp className = "iconUp" />
                        </td>
                        <td>
                            AGE
                            <AiOutlineArrowDown className = "iconDown" />
                            <AiOutlineArrowUp className = "iconUp" />
                        </td>
                        <td>STATUS</td>
                        <td>ACTION</td>
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

        </>
      );
    }

      // We start with an empty list of items.
      const [currentItems, setCurrentItems] = useState(userRows);
      const [pageCount, setPageCount] = useState(0);
      // Here we use item offsets; we could also use page offsets
      // following the API or data you're working with.
      const [itemOffset, setItemOffset] = useState(0);
    
      useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(userRows.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(userRows.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);
    
      // Invoke when user click to request another page.
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % userRows.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };
    
      return (
        <>
          <Items currentItems={currentItems} />
          <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
        </>
      );
    
}