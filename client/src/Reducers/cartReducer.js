import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increaseCartCount: (state) => {
            state.count += 1;
        },
        decreaseCartCount: (state) => {
            state.count -= 1;
        }
    }
})


export const { increaseCartCount, decreaseCartCount } = cartSlice.actions;

export default cartSlice.reducer;