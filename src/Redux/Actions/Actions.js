import { ActionTypes } from "../Constants/ActionTypes";


export const set_clothes = (clothes) =>{
    return{
        type:ActionTypes.SET_CLOTHES,
        payload:clothes,
    }
}

export const set_men_clothes = (clothes) => {
    return{
        type:ActionTypes.SET_MEN_CLOTHE,
        payload:clothes,
    };
};

export const set_women_clothes = (clothes) => {
    return{
        type:ActionTypes.SET_WOMEN_CLOTHE,
        payload:clothes,
    };
};

export const set_kids_clothes = (clothes) => {
    return{
        type:ActionTypes.SET_KIDS_CLOTHE,
        payload:clothes,
    };
};

export const set_occasion_clothes = (clothes) => {
    return{
        type:ActionTypes.SET_OCCASION_CLOTHE,
        payload:clothes,
    };
};