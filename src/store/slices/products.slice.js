import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

export const { setProductsGlobal } = productsSlice.actions

export default productsSlice.reducer

export const getProductsThunk = () => (dispatch) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products'
    return axios.get(URL)
        .then(res => dispatch(setProductsGlobal(res.data.data.products)))
        .catch(err => console.log(err))
}