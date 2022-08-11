import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import BooksReducer from '../BookReducer'

const rootReducer = combineReducers({
  books: BooksReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
