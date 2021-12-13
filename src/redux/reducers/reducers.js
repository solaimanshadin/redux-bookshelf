import books from "../../fakeData/books.json";

const initialState = {
  discover: books,
  readingList: [],
  finishedList: [],
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      const newState = {
        ...state,
        readingList: [...state.readingList, action.payLoad],
      };
      return newState;
    }

    case "REMOVE_FROM_READING_LIST": {
      let newState = {
        ...state,
        finishedList: state.finishedList.filter(
          (book) => book.id !== action.payLoad.id
        ),
      };
      return newState;
    }
    case "ADD_TO_FINISH_LIST": {
      let newState = {
        ...state,
        finishedList: [...state.finishedList, action.payLoad],
        readingList: state.readingList.filter(
          (book) => book.id !== action.payLoad.id
        ),
      };
      return newState;
    }

    default:
      return state;
  }
}
