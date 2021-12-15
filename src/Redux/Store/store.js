import { combineReducers, createStore } from "redux";
import BookReducers from "../Reducer/Bookreducers";

const Rootreducer = combineReducers({
    books: BookReducers,
})
const store = createStore(Rootreducer);

export default store;