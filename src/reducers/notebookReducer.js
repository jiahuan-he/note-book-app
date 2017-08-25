import {ACTION} from "../util/constants";

export const notebooks = (state = {}, action) => {
    switch (action.type){
        case ACTION.NOTEBOOK_ADD:
            const newNotebook = {[action.payload.notebookId]: action.payload};
            return {...state,  ...newNotebook};

        case ACTION.NOTEBOOK_DELETE:

            const currentNotebookKeys =  Object.keys(state).filter( (key)=> key!== action.payload.notebookId);
            const currentNotebooks = currentNotebookKeys.map((key)=> state[key]);
            return currentNotebooks;

        case ACTION.NOTEBOOK_EDIT:
            const newState = {};
            Object.keys(state).forEach((key)=>{
               if (key === action.payload.notebookId){
                   newState[key] = {...state[key], ...action.payload.data};
               }
               else{
                   newState[key] = state[key];
               }
            });
            return newState;
        case ACTION.PAGE_ADD:
            const {notebookId, pageId} = action.payload;
            // console.log("targetnotebook id: "+ targetNotebookId);
            const targetNotebook =  state[notebookId];
            if( !targetNotebook.pages){
                targetNotebook.pages = [];
            }
            if(!state[action.payload.notebookId]){
                console.log ( 'ERROR! NOTEBOOK REDUCER, PAGE ADD');
            }
            return {...state, [notebookId]: {...targetNotebook, pages: targetNotebook.pages.concat(pageId)}};


        default:
            return state;
    }
};

export const pages = (state= {}, action) => {
    switch (action.type){
        case ACTION.PAGE_ADD:
            const newPage = { [action.payload.pageId]: action.payload};
            return {...state, ...newPage};
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



