import React from 'react';
import "./table.scss"

export const Table = () => {

    const rows = [
        {
          id: 1143155,
          product: "Acer Nitro 5",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Playstation 5",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Michael Doe",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Redragon S101",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 35,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Jane Smith",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Harold Carol",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
      ];


  return (
    <div className='table' >
        <table>
          <thead>

            <tr>
                <td>Tracking ID</td>
                <td>Product</td>
                <td>Customer</td>
                <td>Date</td>
                <td>Amount</td>
                <td>Payment Method</td>
                <td>Status</td>
            </tr>

          </thead>
          <tbody>
            
            {
              rows.map((row) => (
                <tr key = {row.id}>
                        <td> {row.id} </td>
                        <td>
                            <img src = {row.img} alt = "img" className = "imageproduct" />
                            {row.product}
                        </td>
                        <td> {row.customer} </td>
                        <td> {row.date} </td>
                        <td> {row.amount} </td>
                        <td> {row.method} </td>
                        <td> <span className = {`status ${row.status}`} > {row.status} </span> </td>
                    </tr>

                ) )
            }
            </tbody>
          

        </table>
    </div>
  )
}
