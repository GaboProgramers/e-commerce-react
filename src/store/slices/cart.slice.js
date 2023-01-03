import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import getConfig from "../../utils/getConfig";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCartGlobal: (state, actions) => actions.payload
    }
})

export const { setCartGlobal } = cartSlice.actions

export default cartSlice.reducer

export const getUserCart = () => (dispatch) => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/cart"
    return axios.get(URL, getConfig())
        .then(res => dispatch(setCartGlobal(res.data.data.cart.products)))
        .catch(err => console.log(err))
}

export const removeFromCartThunk = productId => {
    return dispatch => {
        return axios.delete(`https://e-commerce-api.academlo.tech/api/v1/cart/${productId}`, getConfig())
            .then(() => {
                dispatch(getUserCart())
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'info',
                    title: 'Removed Product'
                })
            })
            .catch(err => {
                dispatch(setCartGlobal([]))
            })
    }
}