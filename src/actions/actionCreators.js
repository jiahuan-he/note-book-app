import {ACTION} from '../util/constants';
import {currentDateToString} from '../util/util';
import {login, onLoginStateChange, signUp} from '../util/fb';

export const addNotebookAction = (title)=>{
    return { type: ACTION.NOTEBOOK_ADD,
        payload:
            {
                title: title,
                createDate : new Date(),
                notebookId: currentDateToString(),
                pageCount : 0,
            }
    }
};

export const addPageAction = (currentNotebookId, data)=> {
    return { type: ACTION.PAGE_ADD,
             payload:
                 {
                     title: data.title,
                     createDate : new Date(),
                     pageId: currentDateToString(),
                     notebookId: currentNotebookId,
                     editor: null,
                 }
    }
};

export const selectNotebookAction = (id)=> {
    return {
        type: ACTION.NOTEBOOK_SELECT,
        payload: {notebookId: id},
    }
};

export const deleteNotebookAction = (id)=> {
    return {
        type: ACTION.NOTEBOOK_DELETE,
        payload: {notebookId: id},
    }
};

export const editNotebookAction = (editingNotebookId, data)=> {
    return {
        type: ACTION.NOTEBOOK_EDIT,
        payload: {notebookId: editingNotebookId, data: data},
    }
};

export const selectPageAction = (pageId) => {
    return {
        type: ACTION.PAGE_SELECT,
        payload: {pageId : pageId},
    }
};

export const saveNoteAction = (notes, currentPageId) => {
    return {
        type: ACTION.NOTES_SAVE_NOTE,
        payload: {targetPageId: currentPageId, note: notes}
    }
};

export const loginAction = (email, password) => {

    return (dispatch) => {
        dispatch({
                type: ACTION.LOGIN_START
            }
        );

        login( email, password, (error) => dispatch({
            type: ACTION.LOGIN_ERROR,
            payload: {error: error}
        }));

        onLoginStateChange( ( user )=> {
            if (user){
                dispatch(
                    {
                        type: ACTION.LOGIN_SUCCESS,
                        payload: {
                            email: user.email
                        }
                    }
                )
            }
        })
    }
};