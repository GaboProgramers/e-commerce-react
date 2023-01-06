import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        setLoadingGlobal: (state, actions) => actions.payload
    }
})

export const { setLoadingGlobal } = loadingSlice.actions

export default loadingSlice.reducer