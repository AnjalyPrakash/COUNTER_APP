import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

 export const store =configureStore({
    //reducer can only update value of state in store
    //reducer key is predefined(object which can hold more than one reducer)
    reducer:{
        //reducer is coming from counterSlice since we are export reducer as export default
        counter:counterSlice//reducer by default so in counter there will be reducer
    }
})

