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
        case ACTION.PAGE_ADD:
            return [...state, action.payload];
        default:
            return state;
    }
};

export const currentNotebook = ( state = 0 , action)=>{
    switch (action.type){
        case ACTION.NOTEBOOK_SELECT:

            return action.payload.id;
        default:
            return state;
    }
};



