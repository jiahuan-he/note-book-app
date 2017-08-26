import { combineReducers,applyMiddleware } from 'redux'
import { createStore } from 'redux'
import {currentPageId, currentNotebookId, notebooks, pages} from "./notebookReducer";
import logger from 'redux-logger'


const reducer = combineReducers({currentPageId, currentNotebookId, notebooks, pages});
const store = createStore( reducer, applyMiddleware(logger));
console.log(store.getState());

export default store;

