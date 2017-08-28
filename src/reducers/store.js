import { combineReducers,applyMiddleware } from 'redux'
import { createStore } from 'redux'
import {notes, currentPageId, currentNotebookId, notebooks, pages} from "./notebookReducer";
import logger from 'redux-logger'


const reducer = combineReducers({notes, currentPageId, currentNotebookId, notebooks, pages});
const store = createStore( reducer, applyMiddleware(logger));

export default store;

