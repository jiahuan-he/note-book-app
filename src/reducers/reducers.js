import {ACTION} from "../util/constants";

export const notebooks = (state = {}, action) => {
    switch (action.type){
        // case ACTION.NOTEBOOK_ADD:
            // const newNotebook = {[action.payload.notebookId]: action.payload};
            // return {...state,  ...newNotebook};
        case ACTION.FETCH_NOTEBOOKS_SUCCESS:
            const notebooks = action.payload;
            const fetchedNotebooks = {};
            notebooks.forEach( (notebook) => {
                const {title, createDate, notebookId, pages} = notebook;
                fetchedNotebooks[notebook.notebookId] = {notebookId, title, createDate, pages}
            });
            return fetchedNotebooks;

        case ACTION.NOTEBOOK_DELETE:

            const currentNotebookKeys =  Object.keys(state).filter( (key)=> key!== action.payload.notebookId);
            const currentNotebooks = {};
            currentNotebookKeys.forEach( (key) => currentNotebooks[key] = state[key]);
            return currentNotebooks;

        case ACTION.NOTEBOOK_EDIT_SUCCESS:
            const newState = {};
            const {title, ...rest} = action.payload.data;
            Object.keys(state).forEach((key)=>{
               if (key === action.payload.data.notebookId){

                   newState[key] = {...state[key], title};
               }
               else{
                   newState[key] = state[key];
               }
            });
            return newState;
        case ACTION.PAGE_ADD_SUCCESS:
            const updatedPages = action.payload.updatedNotebook.pages;
            const notebookId = action.payload.notebookId;
            const targetNotebook =  state[notebookId];
            if( !targetNotebook.pages){
                targetNotebook.pages = [];
            }
            if(!state[action.payload.notebookId]){
                console.log ( 'ERROR! NOTEBOOK REDUCER, PAGE ADD');
            }
            return {...state, [notebookId]: {...targetNotebook, pages: updatedPages}};

        case ACTION.PAGE_ADD_START:
            return state;

        // case ACTION.PAGE_ADD_SUCCESS:
        //     const {notebookId, pageId} = action.payload;
        //     const targetNotebook =  state[notebookId];
        //     // targetNotebook.pageCount ++;
        //     if( !targetNotebook.pages){
        //         targetNotebook.pages = [];
        //     }
        //     if(!state[action.payload.notebookId]){
        //         console.log ( 'ERROR! NOTEBOOK REDUCER, PAGE ADD');
        //     }
        //     return {...state, [notebookId]: {...targetNotebook, pages: targetNotebook.pages.concat(pageId)}};

        case ACTION.NOTEBOOK_ADD_START:
            return state;

        case ACTION.NOTEBOOK_ADD_SUCCESS:
            const newNotebook = {[action.payload.notebookId]: action.payload};
            return {...state,  ...newNotebook};

        case ACTION.NOTEBOOK_ADD_ERROR:
            console.log(action.payload);
            return state;

        case ACTION.NOTEBOOK_DELETE_START:
            return state;

        // case ACTION.NOTEBOOK_DELETE_SUCCESS:
            // const newNotebook = {[action.payload.notebookId]: action.payload};
            // return {...state,  ...newNotebook};

        // case ACTION.NOTEBOOK_DELETE_ERROR:
            // console.log(action.payload);
            // return state;


        default:
            return state;
    }
};

export const pages = (state= {}, action) => {
    switch (action.type){
        // case ACTION.PAGE_ADD:
        //     const newPage = { [action.payload.pageId]: action.payload};
        //     return {...state, ...newPage};

        case ACTION.PAGE_ADD_SUCCESS:
            const newPage = { [action.payload.pageId]: action.payload};
            return {...state, ...newPage};

        case ACTION.FETCH_PAGES_START:
            return state;

        case ACTION.FETCH_PAGES_SUCCESS:
            const fetchedPages = {};
            const pages = action.payload;
            pages.forEach( (page) => {
                const {createDate, notebookId, pageId, title} = page;
                fetchedPages[pageId] = {createDate, notebookId, pageId, title};
            });
            return fetchedPages;

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

        case ACTION.PAGE_EDIT_SUCCESS:
            const newState = {};
            const {title, ...rest} = action.payload.data;
            Object.keys(state).forEach((key)=>{
                if (key === action.payload.data.pageId){

                    newState[key] = {...state[key], title};
                }
                else{
                    newState[key] = state[key];
                }
            });
            return newState;

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
        // case ACTION.NOTES_SAVE_NOTE:
        //     const newNote = { [action.payload.targetPageId]: action.payload};
        //     return {...state, ...newNote};

        case ACTION.NOTE_SAVE_START:
            return state;

        case ACTION.NOTE_SAVE_SUCCESS:
            const newNote = { [action.payload.targetPageId]: action.payload};
            return {...state, ...newNote};

        case ACTION.NOTE_SAVE_ERROR:
            return state;

        case ACTION.FETCH_NOTES_SUCCESS:
            const notes = action.payload;
            const fetchedNotes = {};
            notes.forEach( (fetchedNote)=> {
                const {targetPageId, note} = fetchedNote;
                fetchedNotes[targetPageId] = {targetPageId, note};
            });
            return fetchedNotes;

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
        case ACTION.DETECT_LOGGED_IN:
            return action.payload.user;
        case ACTION.DETECT_LOGGED_OUT:
            return null;

        default:
            return state;
    }

};

