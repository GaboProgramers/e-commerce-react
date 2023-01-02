import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchasesGlobal: (state, actions) => actions.payload
    }
})

export const { setPurchasesGlobal } = purchasesSlice.actions

export default purchasesSlice.reducer

export const getPurchasesCartThunk = () => (dispatch) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
    return axios.post(URL, {}, getConfig())
        .then(() => {
            dispatch(getPurchasesCartThunk())
        })
        .catch(err => console.log(err))
}