import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import authReducer from "./AuthSlice";


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product :productReducer,
        auth:authReducer,
    }
})