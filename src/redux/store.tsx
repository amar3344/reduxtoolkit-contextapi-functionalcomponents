import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./StopWatchSlicer";

export default configureStore({
    reducer:{
        counter:CounterReducer
    }
})