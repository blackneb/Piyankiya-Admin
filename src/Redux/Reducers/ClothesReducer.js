import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    clothes:{
        menclothe: [],
        womenclothe: [],
        kidsclothe: [],
        occasionclothe:[],
    }
}

const ClothesReducer = createSlice({
    name:'clothes',
    initialState:initialstate,
    reducers: {
        addmenclothe:(state, {payload}) => {
            state.clothes.menclothe=payload;
        },
        addwomenclothe: (state, {payload}) => {
            state.clothes.womenclothe=payload;
        },
        addkidsclothe: (state, {payload}) => {
            state.clothes.kidsclothe=payload;
        },
        addoccasionclothe: (state, {payload}) => {
            state.clothes.occasionclothe=payload;
        }
    }
});

export default ClothesReducer.reducer;

