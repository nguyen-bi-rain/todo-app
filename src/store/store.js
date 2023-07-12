import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducer/reducer";

export const store = configureStore({
    reducer: {
        NOTE: noteReducer,
    },
});