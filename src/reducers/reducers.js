import {ACTION} from "../util/constants";

export const notebooks = (state = {}, action) => {
    switch (action.type){
        case ACTION.NOTEBOOK_ADD:
            const newNotebook = {[action.payload.notebookId]: action.payload};
            return {...state,  ...newNotebook};

        case ACTION.NOTEBOOK_DELETE:

            const currentNotebookKeys =  Object.keys(state).filter( (key)=> key!== action.payload.notebookId);
            const currentNotebooks = {};
            currentNotebookKeys.forEach( (key) => currentNotebooks[key] = state[key]);
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
            const targetNotebook =  state[notebookId];
            // targetNotebook.pageCount ++;
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

        case ACTION.NOTEBOOK_DELETE:
            const notebookId = action.payload.notebookId;
            let newKeys =[];
            Object.values(state).forEach( (page) => {
                if(page.notebookId !== notebookId){
                    newKeys.push(page.pageId);
                }
            });
            const nextState ={};
            newKeys.forEach( (key)=> nextState[key] = state[key]);

            return nextState;

        default:
            return state;
    }
};


export const currentNotebookId = (state = "0" , action)=>{
    switch (action.type){
        case ACTION.NOTEBOOK_SELECT:
            return action.payload.notebookId;
        case ACTION.NOTEBOOK_DELETE:
            if (state === action.payload.notebookId){
                return null;
            }
            return state;
        default:
            return state;
    }
};


export const currentPageId = (state = "0" , action)=>{
    switch (action.type){
        case ACTION.PAGE_SELECT:
            return action.payload.pageId;
        case ACTION.NOTEBOOK_SELECT:
            return 0;
        //     }
        //     return state;
        default:
            return state;
    }
};


export const notes = (state = {}, action) => {
    switch (action.type) {
        case ACTION.NOTES_SAVE_NOTE:
            const newNote = { [action.payload.targetPageId]: action.payload};
            return {...state, ...newNote};
        default:
            return state;
    }
};

export const currentUser = ( state = null, action) => {
    switch (action.type) {
        case ACTION.LOGIN_START:
            return null;

        case ACTION.LOGIN_ERROR:
            return null;

        case ACTION.LOGIN_SUCCESS:
            return action.payload.user;

        case ACTION.LOGOUT_SUCCESS:
            return null;
        case "DETECT_LOGGED_IN":
            return action.payload.user;
        case "DETECT_LOGGED_OUT":
            return null;

        default:
            return state;
    }

};






