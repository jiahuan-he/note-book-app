import { combineReducers,applyMiddleware } from 'redux'
import { createStore } from 'redux'
import notebookReducer from "./notebookReducer";
import logger from 'redux-logger'

const reducer = combineReducers({notebookReducer});

const store = createStore( reducer, applyMiddleware(logger));

export default store;
