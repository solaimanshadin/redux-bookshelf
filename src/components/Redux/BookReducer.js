import books from '../../fakeData/books.json'
const Collections = {
  DescoverCollection: books,
  ReadingCollection: [],
  FinishedCollection: [],
}

const BooksReducer = (state = Collections, action) => {
  switch (action.type) {
    case 'AddToCard': {
      const newBooks = {
        ...state,
        ReadingCollection: [...state.ReadingCollection, action.payload],
      }
      return newBooks
    }
    case 'removefromCard': {
      const newbooks = {
        ...state,
        ReadingCollection: [
          ...state.ReadingCollection.filter(
            (book) => book.id !== action.payload,
          ),
        ],
      }
      return newbooks
    }

    case 'fineshedBook': {
      const newBooks = {
        ...state,
        ReadingCollection: [
          ...state.ReadingCollection.filter((book) => book !== action.payload),
        ],
        FinishedCollection: [...state.FinishedCollection, action.payload],
      }
      return newBooks
    }

    default:
      return state
  }
}

export default BooksReducer
