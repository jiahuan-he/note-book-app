import {ACTION} from '../util/constants';
import {currentDateToString} from '../util/util';

export const addNotebookAction = (title)=>{
    return { type: ACTION.NOTEBOOK_ADD,
        payload:
            {
                title: title,
                createDate : 'today',
                id: currentDateToString()
            }
    }
};

export const addPageAction = (title)=> {
    return { type: ACTION.PAGE_ADD,
             payload:
                 {
                     title: title,
                     createDate : 'today',
                     id: currentDateToString(),
                     editor: null,
                 }
    }
};

export const selectNotebookAction = (id)=> {
    return {
        type: ACTION.NOTEBOOK_SELECT,
        payload: {id: id},
    }
};