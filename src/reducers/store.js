import { combineReducers,applyMiddleware } from 'redux'
import { createStore } from 'redux'
import {notes, currentPageId, currentNotebookId, notebooks, pages} from "./notebookReducer";
import logger from 'redux-logger'
import thunk from 'redux-thunk';


const reducer = combineReducers({notes, currentPageId, currentNotebookId, notebooks, pages});
const store = createStore( reducer, applyMiddleware(thunk, logger));

export default store;

