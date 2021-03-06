import {ACTION} from '../util/constants';
import {currentDateToString} from '../util/util';
import {logout, login, signUp, getCurrentUser} from '../util/fb';
import axios from 'axios';

const URL = "https://notebook-server.herokuapp.com/";
// const URL = "http://localhost:3000/";
const localURL = "http://localhost:3000/";
export const asyncAddNotebookAction = (title) => {
    return (dispatch) => {
        dispatch({
            type: ACTION.NOTEBOOK_ADD_START,
        });

        axios.post(URL+'notebooks', {
                uid: getCurrentUser().uid,
                title: title,
                createDate : new Date(),
                notebookId: currentDateToString(),
            }
        )
            .then((response) =>{
                dispatch({
                    type: ACTION.NOTEBOOK_ADD_SUCCESS,
                    payload: response.data
                })
            })
            .catch((error) =>{
                dispatch({
                    type: ACTION.NOTEBOOK_ADD_ERROR,
                    payload: error
                })
            });
    }
};
//
// export const addPageAction = (currentNotebookId, title)=> {
//     return { type: ACTION.PAGE_ADD,
//              payload:
//                  {
//                      title: title,
//                      createDate : new Date(),
//                      pageId: currentDateToString(),
//                      notebookId: currentNotebookId,
//                  }
//     }
// };
//

export const asyncAddPageAction = (currentNotebookId, title) => {
    return (dispatch) => {
        dispatch({
            type: ACTION.PAGE_ADD_START
        });

        axios.post(URL+'pages', {
                uid: getCurrentUser().uid,
                title: title,
                createDate : new Date(),
                pageId: currentDateToString(),
                notebookId: currentNotebookId
            }
        )
            .then((response) =>{
                dispatch({
                    type: ACTION.PAGE_ADD_SUCCESS,
                    payload: response.data
                })
            })
            .catch((error) =>{
                dispatch({
                    type: ACTION.PAGE_ADD_ERROR,
                    payload: error
                })
            });
    }
};

export const asyncSaveNoteAction = (note, currentPageId) => {
    return (dispatch) => {
        dispatch({
            type: ACTION.NOTE_SAVE_START,
        });

        axios.post(URL+'notes', {
            uid: getCurrentUser().uid,
            targetPageId: currentPageId,
            note: note
        })
            .then( (response) => {
                dispatch({
                    type: ACTION.NOTE_SAVE_SUCCESS,
                    payload: response.data
                })
        })
            .catch( (error) => {
                dispatch( {
                    type: ACTION.NOTE_SAVE_ERROR,
                    payload: error
                })
            })
    }
};




export const selectNotebookAction = (id)=> {
    return {
        type: ACTION.NOTEBOOK_SELECT,
        payload: {notebookId: id},
    }
};

export const deleteNotebookAction = (notebookId)=> {
    const uid = getCurrentUser().uid;
    return (dispatch) => {
        dispatch({type: ACTION.NOTEBOOK_DELETE_START, payload: notebookId});
        axios.delete(`${URL}notebooks?uid=${uid}&notebookId=${notebookId}`)
            .then((response) => {
                dispatch({type: ACTION.NOTEBOOK_DELETE_SUCCESS, payload: response});
            })
            .catch ( (error) => {
                dispatch( {type: ACTION.NOTEBOOK_DELETE_ERROR, palyload: error});
            })
    };


    //
    // return {
    //     type: ACTION.NOTEBOOK_DELETE,
    //     payload: {notebookId: id},
    // }
};

export const deletePageAction = (pageId, notebookId) => {
    const uid =  getCurrentUser().uid;
    return (dispatch)=> {
        dispatch({type: ACTION.PAGE_DELETE_START});
        axios.delete(`${URL}pages?uid=${uid}&pageId=${pageId}&notebookId=${notebookId}`)
            .then((response) => {
                dispatch({type: ACTION.PAGE_DELETE_SUCCESS, payload: response});
            })
            .catch ( (error) => {
                dispatch( {type: ACTION.PAGE_DELETE_ERROR, palyload: error});
            })
    }
};

export const editNotebookAction = (editingNotebookId, data)=> {
    // return {
    //     type: ACTION.NOTEBOOK_EDIT,
    //     payload: {notebookId: editingNotebookId, data: data},
    // }

    return (dispatch) => {
        dispatch({type: ACTION.NOTEBOOK_EDIT_START});
        axios.put(URL+"notebooks",
            {
                uid: getCurrentUser().uid,
                notebookId: editingNotebookId,
                title: data.title
            }
        )
            .then( (response) => {
                dispatch({
                    type: ACTION.NOTEBOOK_EDIT_SUCCESS,
                    payload: response
                })
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.NOTEBOOK_EDIT_ERROR,
                    payload: error
                })
            })
    }
};


export const editPageAction = (editingPageId, data)=> {
    // return {
    //     type: ACTION.NOTEBOOK_EDIT,
    //     payload: {notebookId: editingNotebookId, data: data},
    // }

    return (dispatch) => {
        dispatch({type: ACTION.PAGE_EDIT_START});
        axios.put(`${URL}pages`,
            {
                uid: getCurrentUser().uid,
                pageId: editingPageId,
                title: data.title
            }
        )
            .then( (response) => {
                dispatch({
                    type: ACTION.PAGE_EDIT_SUCCESS,
                    payload: response
                })
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.PAGE_EDIT_ERROR,
                    payload: error
                })
            })
    }
};



export const selectPageAction = (pageId) => {
    return {
        type: ACTION.PAGE_SELECT,
        payload: {pageId : pageId},
    }
};

// export const saveNoteAction = (notes, currentPageId) => {
//     return {
//         type: ACTION.NOTES_SAVE_NOTE,
//         payload: {targetPageId: currentPageId, note: notes}
//     }
// };



export const loginAction = (email, password) => {

    return (dispatch) => {
        dispatch({
                type: ACTION.LOGIN_START
            }
        );

        login( email, password, (error) => dispatch({
            type: ACTION.LOGIN_ERROR,
            payload: {error: error.message}
        }));

        // onLoginStateChange( ( user )=> {
        //     if (user){
        //         dispatch(
        //             {
        //                 type: ACTION.LOGIN_SUCCESS,
        //                 payload: {
        //                     user: user
        //                 }
        //             }
        //         )
        //     }
        // })
    }
};


export const signUpAction = (email, password, name) => {

    return (dispatch) => {
        dispatch({
                type: ACTION.SIGNUP_START,
                payload: {email, password}
            }
        );

        signUp( email, password, name, (error) => dispatch({
            type: ACTION.SIGNUP_ERROR,
            payload: {error: error.message}
        }));



        // onLoginStateChange( ( user )=> {
        //     if (user){
        //         dispatch(
        //             {
        //                 type: ACTION.LOGIN_SUCCESS,
        //                 payload: {
        //                     user : user
        //                 }
        //             }
        //         );
        //     }
        // })
    }
};

export const logoutAction = () =>{

    return (dispatch) => {
        dispatch({
            type: ACTION.LOGOUT_START
        });

        logout(
            () => {
                // dispatch(
                //     {
                //         type: ACTION.LOGOUT_SUCCESS
                //     }
                // )
            },
            (error) => {
                dispatch(
                    {
                        type: ACTION.LOGOUT_ERROR,
                        payload: {error: error}
                    }
                )
            }
        )
    }
};

export const detectLoggedInAction = (user) => {
    return {
        type: ACTION.DETECT_LOGGED_IN,
        payload: {user: user}
    };
};

export const detectLoggedOutAction = () => {
    return {
        type: ACTION.DETECT_LOGGED_OUT
    };
};

export const fetchNotebooksAction = (uid) => {
    return (dispatch) => {
        dispatch({type: ACTION.FETCH_NOTEBOOKS_START});
        axios.get(URL+'notebooks?uid='+uid)
            .then( (response)=>{
                dispatch({
                    type:ACTION.FETCH_NOTEBOOKS_SUCCESS,
                    payload: response.data
                })
            })
            .catch(
                (error)=> {
                    dispatch(
                        {
                            type: ACTION.FETCH_NOTEBOOKS_ERROR,
                            payload: error
                        }
                    )
                }
            )
    }
};


export const fetchPagesAction = (uid) => {
    return (dispatch) => {
        dispatch({type: ACTION.FETCH_PAGES_START});
        axios.get(URL+'pages?uid='+uid)
            .then( (response)=>{
                dispatch({
                    type:ACTION.FETCH_PAGES_SUCCESS,
                    payload: response.data
                })
            })
            .catch(
                (error)=> {
                    dispatch(
                        {
                            type: ACTION.FETCH_PAGES_ERROR,
                            payload: error
                        }
                    )
                }
            )
    }
};

export const fetchNotesFromServer = (uid) => {
    return (dispatch) => {
        dispatch({type: ACTION.FETCH_NOTES_START});
        axios.get(URL+'notes?uid='+uid)
            .then( (response)=>{
                dispatch({
                    type:ACTION.FETCH_NOTES_SUCCESS,
                    payload: response.data
                })
            })
            .catch(
                (error)=> {
                    dispatch(
                        {
                            type: ACTION.FETCH_NOTES_ERROR,
                            payload: error
                        }
                    )
                }
            )
    }
};

