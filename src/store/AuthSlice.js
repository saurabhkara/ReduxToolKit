import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    userToken:null,
    userName:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserToken:(state, action)=>{
            state.userToken = action.payload
        },
        setUserName:(state, action)=>{
            state.userName = action.payload
        },
        setIsLoading:(state, action)=>{
            state.isLoading = action.payload
        }
    }
})

export const {setUserToken, setUserName, setIsLoading} = authSlice.actions;
export default authSlice.reducer;