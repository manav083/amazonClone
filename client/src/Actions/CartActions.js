import { createAsyncThunk } from "@reduxjs/toolkit";
import { authGet } from "../helper";


export const getCartDetails = createAsyncThunk(
    "cart",
    async () => {
        try {
            let res = await authGet("getCartDetails");
            // console.log("fcsgvdhbsfjnkm");
            // console.log("res", res);
            return (res.data);
        } catch (e) {
            console.log(e);
        }
    }
)
