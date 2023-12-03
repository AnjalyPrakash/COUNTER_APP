const { createSlice } = require("@reduxjs/toolkit");

// A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
export const counterSlice=createSlice({
    name:"counter-app",
    initialState:{
        value:0
    },
    //actions are created inside this reducers key as objects
    reducers:{
        //logics to update state

        //function to increment number
        increment:(state,action)=>{
          state.value+=action.payload
        },

        //function to decrement number
        decrement:(state,action)=>{
            state.value-=action.payload
        },

        //function to reset
        reset:(state)=>{
            state.value=0
        }
    }
})

//action is required by component inorder to update state
export const{increment,decrement,reset}=counterSlice.actions

//reducer is required to store to change the state value
export default counterSlice.reducer