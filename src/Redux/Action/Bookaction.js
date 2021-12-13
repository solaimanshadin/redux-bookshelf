export function BookAddAction(payload) {
    return {
        type: 'BOOK_ADD_TO_READING_LIST',
        payload
    }
}
export function BookRemoveAction(payload) {
    return {
        type: 'BOOK_REMOVE_TO_READING_LIST',
        payload
    }
}

export function BookAddFinishlistAction(payload) {
    return {
        type: 'BOOK_ADD_TO_FINISH_LIST',
        payload
    }
}