export function addToReadingList (payload) {
    return {
        type: 'ADD_TO_READING_LIST',
        payload
    }
}

export function removeFormReadingList(payload) {
    return {
        type: 'REMOVE_FROM_READING_LIST',
        payload
    }
}

