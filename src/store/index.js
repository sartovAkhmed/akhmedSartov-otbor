import { configureStore } from "@reduxjs/toolkit";
import { pocemonReducer } from "./pocemonSlice";

export const store = configureStore({
    reducer: {
        pocemons: pocemonReducer
    }
})