import { configureStore } from "@reduxjs/toolkit";
//nên check lại cái import ThemeSlice này
import ThemeSlice from "../slice/Theme/themeSlice";
import ProductSlice from "../slice/ProductSlice/ProductSlice"


export const store = configureStore({
    reducer: {
        theme: ThemeSlice,
        products: ProductSlice
    },

})