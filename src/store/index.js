import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
import cart from './slices/cart.slice'
import category from './slices/filterCategory'

export default configureStore({
    reducer: {
        products,
        cart,
        category
    }
})