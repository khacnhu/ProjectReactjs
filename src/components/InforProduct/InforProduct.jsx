import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import "./inforproduct.scss"
import { products } from '../../product'
import { useNavigate } from 'react-router-dom'

export const InforProduct = () => { 
    const navigate = useNavigate()
    
    const comeback = () => {
        navigate("/products")
    }   
  return (
    <div className='infor'>
        <Sidebar/>
        <div className='inforContainer' >
            <Navbar/>
            <div className='header'>
                DETAIL INFORMATION ABOUT PRODUCT
            </div>

            <div className='inforProduct' >
            {
                products.map(product => (
                    <div>

                    <div className='title' >
                        <p>Product Name</p>
                        <img src = {"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"} alt = ""  />
                    </div>

                    <div className = "description" >
                        <p>present</p>
                        <p>company</p>
                        <p>madeIn</p>
                        <p>type</p>
                        <p>date</p>
                        <p>countCustomer</p>
                        <p>sell</p>
                        <p>buy</p>
                        <p>amount</p>
                        <p>like</p>
                        <p>remain</p>
                    </div>

                    <div className='btnBack' >
                        <button onClick={comeback}>Back</button>
                    </div>
                    </div>


                ) )

            }


            </div>

        </div>
    </div>
  )
}
