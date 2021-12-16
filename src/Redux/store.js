import bookReducer from "./Reducres/bookReducres";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    book: bookReducer
});

export const store = createStore(rootReducer, composeWithDevTools());