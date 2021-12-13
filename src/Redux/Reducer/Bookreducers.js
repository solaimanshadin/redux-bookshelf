import books from '../../fakeData/books.json';
const initialstate = {
    discover: books,
    readinglist: [],
    finishedbook: []
}


export default function BookReducers(state = initialstate, action) {
    switch(action.type){
        case 'BOOK_ADD_TO_READING_LIST':{
            if(state.readinglist.indexOf(action.payload) !== -1)
            {
                const newstate = {...state, readinglist: [...state.readinglist, action.payload]}
                console.log('hi')
                return newstate;
            }
            else{
                const newstate = {...state, readinglist: [...state.readinglist]}
                return newstate
            }
        }
        case 'BOOK_REMOVE_TO_READING_LIST':{
            const newstate = {...state, readinglist: state.readinglist.filter(book => book.id !== action.payload )}
            return newstate;
        }
        case 'BOOK_ADD_TO_FINISH_LIST':{
            const newstate = {...state, finishedbook: [...state.finishedbook, action.payload]}
            return newstate;
        }
        default:
            return state;
    }
}