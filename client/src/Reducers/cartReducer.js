import { createSlice } from "@reduxjs/toolkit";
import { getCartDetails } from "../Actions/cartActions";

const initialState = {
    count: 0,
    products: [],
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
        },
        setProducts: (state, action) => {
            state.products = [...state.products, action.payload];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartDetails.fulfilled, (state, action) => {
                state.count = action.payload.total_count ? action.payload.total_count : state.count;
                state.products = action.payload.products ? action.payload.products : state.products;
            })
    }
})


export const { increaseCartCount, decreaseCartCount, setProducts } = cartSlice.actions;

export default cartSlice.reducer;