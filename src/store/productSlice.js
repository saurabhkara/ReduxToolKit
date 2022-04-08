import { createSlice } from "@reduxjs/toolkit";

export const STATUSES= Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading',
})

const initialState = {
    data:[],
    status:STATUSES.IDLE,
}

export const productSlice = createSlice({
    name: "product",
    initialState ,
    reducers: {
        setStatus:(state,action)=>{
            state.status=action.payload
        },
        setProduct:(state, action)=>{
            state.data=action.payload
        },

        // removeProduct:(state,action)=>{
        //     state.count=state.count-1;
        // }
    }
})

export const {setProduct, setStatus} = productSlice.actions;
export default productSlice.reducer;


//Thunks middleware 

export function fetchProducts(){
    return async function fetchProductsThunk(dispatch, getState){
        console.log('Middleware Thunk called');
        // const state=getState().STATUSES
        try{
            dispatch(setStatus(STATUSES.LOADING))
            const data = await fetch('https://fakestoreapi.com/products');
            const productsData = await data.json();
            // console.log('Middleware Thunk data', productsData);
            dispatch(setProduct(productsData));
            dispatch(setStatus(STATUSES.IDLE))
            console.log("middleware function finished")
        }catch(ERROR){
            console.log('error in FETCHPRODUCTS', ERROR)
            dispatch(setStatus(STATUSES.ERROR))
        }

    }
}


// const fetchProd=()=> async(dispatch, getState)=>{

// }     