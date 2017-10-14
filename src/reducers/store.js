import { combineReducers,applyMiddleware } from 'redux'
import { createStore, compose } from 'redux'
import {authError, currentUser ,notes, currentPageId, currentNotebookId, notebooks, pages, notebookDeleteStatus} from "./reducers";
import logger from 'redux-logger'
import thunk from 'redux-thunk';


const reducer = combineReducers({notebookDeleteStatus, authError, currentUser, notes, currentPageId, currentNotebookId, notebooks, pages});
const store = createStore( reducer,
    compose(applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;

