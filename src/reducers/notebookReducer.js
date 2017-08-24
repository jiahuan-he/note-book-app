import {ACTION} from "../constants/type";


export const notebooks = (state = [], action) => {
    switch (action.type){
        case ACTION.NOTEBOOK_ADD:
            return [...state, action.payload];
        default:
            return state;
    }
};

export const pages = (state= [], action) => {
    switch (action.type){
        case ACTION.NOTEBOOK_ADD:
            return state;
        case ACTION.PAGE_ADD:
            return [...state, action.payload];
        default:
            return state;
    }
};




