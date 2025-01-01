import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value : 0
    },
    reducers:{
        increment : (state)=>{
            state.value = state.value+1
        },
        decrement : (state)=>{
            state.value -= 1
        },
        decrementByvalue : (state,action) =>{
            console.log(action.payload)
            state.value = state.value - action.payload
        }
    }
})

export const {increment,decrement,decrementByvalue} = counterSlice.actions
export default counterSlice.reducer