import { createSlice } from "@reduxjs/toolkit";

const initialState = [] ;

const cartSlice = createSlice({
    name:"cart",
    initialState,

    //reducers writing function add and remove the product from the cart
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(items => items.id !== action.payload)
        }
    }
})

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer