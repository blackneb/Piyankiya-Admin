import { ActionTypes } from "../Constants/ActionTypes";
const initialstate = {
    clothes:[]
}

export const ClothesReducer = (state = initialstate, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_CLOTHES :
            return {...state, clothes:payload};
        default:
            return state;
    }
}