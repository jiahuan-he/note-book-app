import {ACTION} from '../constants/type';
export const addNotebookAction = ()=>{
    return {type: ACTION.NOTEBOOK_ADD};
};

export const addPageAction = (title)=> {
    return { type: ACTION.PAGE_ADD,
             payload:
                 {
                     title: title,
                     createDate : 'today',
                     editor: null
                 }
    }
};