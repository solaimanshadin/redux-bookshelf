import books from "../../fakeData/books.json";
const initialState = {
  discover: books,
  readingList: [],
  finishedList: [],
};
function bookReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_READING_LIST":
      return {
        ...state,
        readingList: [...state.readingList, action.payload],
      };
    case "REMOVE_FROM_READING_LIST":
      return {
        ...state,
        readingList: state.readingList.filter(
          (book) => book.id !== action.payload
        ),
      };
    case "ADD_TO_FINISHED_LIST":
      return {
        ...state,
        finishedList: [...state.finishedList, action.payload],
      };
    default:
      return state;
  }
}
export default bookReducer;
