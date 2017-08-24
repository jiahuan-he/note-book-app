import {ACTION} from "../util/constants";


export const notebooks = (state = [], action) => {
    switch (action.type){
        case ACTION.NOTEBOOK_ADD:
            return [...state, action.payload];

        case ACTION.NOTEBOOK_DELETE:
            return state.filter( (notebook)=> notebook.notebookId !== action.payload.notebookId);
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

export const currentNotebookId = (state = 0 , action)=>{
    switch (action.type){
        case ACTION.NOTEBOOK_SELECT:
            return action.payload.notebookId;
        default:
            return state;
    }
};



