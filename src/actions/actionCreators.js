import {ACTION} from '../util/constants';
import {currentDateToString} from '../util/util';

export const addNotebookAction = (title)=>{
    return { type: ACTION.NOTEBOOK_ADD,
        payload:
            {
                title: title,
                createDate : 'today',
                notebookId: currentDateToString()
            }
    }
};

export const addPageAction = (title, currentNotebookId)=> {
    return { type: ACTION.PAGE_ADD,
             payload:
                 {
                     title: title,
                     createDate : 'today',
                     pageId: currentDateToString(),
                     currentNotebookId: currentNotebookId,
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