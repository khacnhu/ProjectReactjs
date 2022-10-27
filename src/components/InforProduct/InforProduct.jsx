import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import "./inforproduct.scss";
// import { products } from '../../product'
import { useParams, useNavigate } from "react-router-dom";

// import {selectProductById} from "../../featureRedux/slice/ProductSlice/ProductSlice"


export const InforProduct = () => {
  const { productId } = useParams();
  console.log(productId);
  const navigate = useNavigate();

  let {products} = useSelector((state) => state.products)
  let renderProduct = products.find(product => product.id === Number(productId))
  console.log(renderProduct)

  const comeback = () => {
    navigate("/products");
  };
  return (
    <div className="infor">
      <Sidebar />
      <div className="inforContainer">
        <Navbar />
        <div className="header">DETAIL INFORMATION ABOUT PRODUCT</div>

        <div className="inforProduct">
          {renderProduct && (
            <div class = "productContain" >
              <div className="title">
                <p>Product Name</p>
                <img src={renderProduct.img} alt="" />
              </div>

              <div className="description">
                <p>Name: {renderProduct.productName}</p>
                <p>company: {renderProduct.company} </p>
                <p>madeIn: {renderProduct.madeIn} </p>
                <p>type: {renderProduct.type} </p>
                <p>date: {renderProduct.date} </p>
                <p>countCustomer: {renderProduct.countCustomer} </p>
                <p>sell: {renderProduct.sell} </p>
                <p>buy: {renderProduct.buy} </p>
                <p>amount: {renderProduct.buy} </p>
                <p>like: {renderProduct.like} </p>
                <p>remain: {renderProduct.remain} </p>
              </div>

              <div className="btnBack">
                <button onClick={comeback}>Back</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
