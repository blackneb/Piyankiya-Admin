import { configureStore } from "@reduxjs/toolkit";
import ClothesReducer from "./Reducers/ClothesReducer";
export const store = configureStore({
    reducer: {
        clothes:ClothesReducer,
    },
});
