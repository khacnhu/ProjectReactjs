import React, { useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import "./product.scss"
import { products } from '../../product'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { InforProduct } from '../InforProduct/InforProduct'

export const Product = () => {
  // console.log(products)
  const [items, setItems] = useState(products)
  // console.log(items)
  const [searchProduct, setProduct] = useState("")


  const filterProduct = () => {
    // let inputInfor = document.getElementById("inputInfor")
    // console.log(inputInfor)
    let newitems = items.slice()
    setItems(newitems.filter(product => {
      return product.productName.includes(searchProduct)
    }
    ))
  }

  const refreshProduct = () => {
    // let inputInfor = document.getElementById("inputInfor")
    setItems(products)
    setProduct("")
  }

  const filterItem = () => {

  }

  return (
    <div className = "product" >
        <Sidebar/>
        <div className = "productContainer">
            <Navbar/>
            <div className = "productHeader" >
                <div className = "productTitle">Product</div>
                <div className = "productButton">
                    <button>Create</button>
                </div>
            </div>

            <div className='searchProduct' >
              <input type = "text" value = {searchProduct} onChange = {(e)=> setProduct(e.target.value)} placeholder='type infor about name product' id='inputInfor' />
              <button onClick={filterProduct} className = "btnSearch" >Search</button>
              <button onClick = {refreshProduct} className = "btnRefresh" >Refresh</button>
            </div>


            <div className = "productInfor">
            {
              items.map(product=>(
                <div className = "productItems" key = {product.id} >
                  {/* <button onClick={() => filterProduct(product)} >ADD TO XEM SAN PHAM</button> */}
                  <img src = {product.img} alt = "" className = "imageProduct" />

                  <div className = "productDescription" >
                    <p> Tên sản phẩm: {product.productName} </p>
                    <p> Số lượng bán ra: {product.sell} </p>
                    <p> Số lượng nhập vào: {product.buy} </p>
                    <p> Độ ưa chuộng: {product.like} </p>
                    <p> Số lượng hàng còn lại: {product.remain} </p>
                    <p> <Link to = "inforProduct" style={{textDecoration : "none", color: "palevioletred"} } >
                        <button onClick = {filterItem(product)}>Detail Product</button>
                    </Link> </p>
                  </div>


              </div>
              
              
              ))
            }
{/* 
              <div className = "productItems" >
                  <img src = {"https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"} alt = "" className = "imageProduct" />

                  <div className = "productDescription" >
                    <p> Tên sản phẩm </p>
                    <p> Số lượng bán ra </p>
                    <p> Số lượng nhập vào </p>
                    <p> Độ ưa chuộng </p>
                    <p> Số lượng hàng còn lại </p>
                  </div>       
              </div> */}

            </div>


        </div>

    </div> 
  )
}
