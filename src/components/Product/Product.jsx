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
                    <p> T??n s???n ph???m: {product.productName} </p>
                    <p> S??? l?????ng b??n ra: {product.sell} </p>
                    <p> S??? l?????ng nh???p v??o: {product.buy} </p>
                    <p> ????? ??a chu???ng: {product.like} </p>
                    <p> S??? l?????ng h??ng c??n l???i: {product.remain} </p>
                    <p> <Link to = {`/products/${product.id}`} style={{textDecoration : "none", color: "palevioletred"} } >
                        Detail Product
                    </Link> </p>
                  </div>


              </div>
              
              
              ))
            }
{/* 
              <div className = "productItems" >
                  <img src = {"https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"} alt = "" className = "imageProduct" />

                  <div className = "productDescription" >
                    <p> T??n s???n ph???m </p>
                    <p> S??? l?????ng b??n ra </p>
                    <p> S??? l?????ng nh???p v??o </p>
                    <p> ????? ??a chu???ng </p>
                    <p> S??? l?????ng h??ng c??n l???i </p>
                  </div>       
              </div> */}

            </div>


        </div>

    </div> 
  )
}
