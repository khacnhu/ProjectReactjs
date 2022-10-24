import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from '../../product'
import "./slick.scss"

export const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
      };
  return (
    <div>
        <div>
        <h2> Product Slider Banner</h2>
        <Slider {...settings}>
            {
                products.map(product => (
                    <div key = {product.id}>
                        <img src = {product.img} alt = "sanpham" className = "clockImage" />
                        <p className = "productName" > {product.productName} </p>
                    </div>
                ))

            }
        
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    </div>
  )
}
