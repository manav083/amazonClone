import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../helper";

export const addToCart = createAsyncThunk(
    "cart",
    async (data) => {
        try {
            let res = await Post("addToCart", data);
            console.log("fcsgvdhbsfjnkm");
            return (res);
        } catch (e) {
            console.log(e);
        }
    }
)
