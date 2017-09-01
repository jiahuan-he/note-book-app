import { combineReducers,applyMiddleware } from 'redux'
import { createStore, compose } from 'redux'
import {currentUser ,notes, currentPageId, currentNotebookId, notebooks, pages} from "./notebookReducer";
import logger from 'redux-logger'
import thunk from 'redux-thunk';


const reducer = combineReducers({currentUser, notes, currentPageId, currentNotebookId, notebooks, pages});
const store = createStore( reducer,
    compose(applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;

