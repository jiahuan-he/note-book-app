import { combineReducers,applyMiddleware } from 'redux'
import { createStore } from 'redux'
import { pageReducer} from "./notebookReducer";
import logger from 'redux-logger'




// const reducer = combineReducers({notebookReducer, pageReducer});

const store = createStore( pageReducer, applyMiddleware(logger));
console.log(store.getState());

export default store;
