import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0,
}

export const counterSlice = createSlice({
    name : 'Counter',
    initialState,
    reducers: {
        increment :(state)=>{
            state.value +=1
        },
        decrement :(state)=>{
            state.value -=1
        },
        incrementByAmount:(state,action)=>{
            state.value += action.payload
        },
        
        resetAmount :(state)=>{
            state.value = initialState.value
        },
    },
})

export const {increment,decrement,incrementByAmount,resetAmount} = counterSlice.actions
export default counterSlice.reducer