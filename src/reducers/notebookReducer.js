import {ACTION} from "../constants/type";



const initState = {
    notebooks: [],
    pages: [],
};

// export const notebookReducer = (state={notebooks: []}, action) => {
//     console.log(initState.pages);
//     switch (action.type){
//         case ACTION.NOTEBOOK_ADD:
//             console.log("new notebook");
//             return state;
//         default:
//             return state;
//     }
// };

export const pageReducer = (state={pages: [], notebooks: []}, action) => {
    switch (action.type){
        case ACTION.NOTEBOOK_ADD:

            return state;
        case ACTION.PAGE_ADD:

            return {...state, pages: state.pages.concat({
                title: action.payload.title,
                createDate: action.payload.createDate
            })} ;
        default:
            return state;
    }
};




