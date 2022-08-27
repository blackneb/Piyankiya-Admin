import { ActionTypes } from "../Constants/ActionTypes";
const initialstate = {
    clothes:[]
}

export const ClothesReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ActionTypes.SET_CLOTHES :
            return {...state, clothes:action.payload};
        default:
            return state;
    }
}