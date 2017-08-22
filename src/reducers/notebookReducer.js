import ACTION from "./constants";

const notebookReducer = (state = [], action) => {
    switch (action.type){
        case ACTION.NOTEBOOK_ADD:
            console.log("new notebook");
            return state;
        default:
            return state;
    }
};

export default notebookReducer;