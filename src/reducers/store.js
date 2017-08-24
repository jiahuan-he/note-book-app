import { combineReducers,applyMiddleware } from 'redux'
import { createStore } from 'redux'
import {currentNotebookId, notebooks, pages} from "./notebookReducer";
import logger from 'redux-logger'


const reducer = combineReducers({currentNotebookId, notebooks, pages});
const store = createStore( reducer, applyMiddleware(logger));
console.log(store.getState());

export default store;
