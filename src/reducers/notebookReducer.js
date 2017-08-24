import {ACTION} from "../util/constants";


export const notebooks = (state = [], action) => {
    switch (action.type){
        case ACTION.NOTEBOOK_ADD:
            return [...state, action.payload];

        case ACTION.NOTEBOOK_DELETE:
            return state.filter( (notebook)=> notebook.notebookId !== action.payload.notebookId);

        case ACTION.NOTEBOOK_EDIT:
            const newNotebooks = state.map( (notebook)=> {
                if ( notebook.notebookId === action.payload.editingNotebookId){
                    return {...notebook, ...action.payload.data};
                }
                return notebook;
            });
            return newNotebooks;

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
        case ACTION.NOTEBOOK_DELETE:
            if (state === action.payload.notebookId){
                return null;
            }
        default:
            return state;
    }
};



