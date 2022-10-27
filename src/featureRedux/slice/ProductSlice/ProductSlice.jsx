import {createSlice} from '@reduxjs/toolkit'
import {products} from "../../../product.js";

// const initialState = {
//     dark: false,
//     // status: 'idle'
// }
// const initialState = {
//     products: products,
//     status: 'idle'
// }
console.log(products)

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products
    },
    reducers: {

        }
    }

)

// export const {changetheme} = productSlice.
// export const selectProductById = (state, productId) => state.products.find(product => product.id === productId)

export default productSlice.reducer