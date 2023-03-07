import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "../Actions/cartActions";

const initialState = {
    count: 0,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.fulfilled, (state, action) => {
                console.log("action.payload", action.payload);
                state.count = action.payload.total_count ? action.payload.total_count : state.count;
            })
    }
})


export const { increaseCartCount, decreaseCartCount } = cartSlice.actions;

export default cartSlice.reducer;