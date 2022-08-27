import { createSelector } from "@reduxjs/toolkit"

export const GetSpecificClothes = (state, id) => {
    createSelector(state => state.clothes.clothes.filter((user) => user.gfor === id))
}