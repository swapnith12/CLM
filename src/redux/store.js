import { configureStore } from "@reduxjs/toolkit";
import StartReducer from './slice/start'

export const store = configureStore({
    reducer:{
       start:StartReducer
    }
})