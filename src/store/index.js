import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
import cart from './slices/cart.slice'
import category from './slices/filterCategory'
import purchases from './slices/Purchases.slice'

export default configureStore({
    reducer: {
        products,
        cart,
        category,
        purchases
    }
})