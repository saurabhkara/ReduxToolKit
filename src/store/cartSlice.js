import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState ,
    reducers: {
        add:(state)=>{
            state.count++;
        },

        subs:(state)=>{
            state.count=state.count-1;
        }
    }
})

export const {add, subs} = cartSlice.actions;
export default cartSlice.reducer;