import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const cartSlice = createSlice({
    name: "cart",
    initialState ,
    reducers: {
        // addProduct(state, action){
        //     return [...state, action.payload]
        //     // state.push(action.payload)
        // },
        addProduct:(state, action)=>{
            return [...state, action.payload]
            // state.push(action.payload)
        },

        removeProduct(state, action){
            return state.filter((item)=>item.id !== action.payload)
        }
    }
})

export const {addProduct, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;