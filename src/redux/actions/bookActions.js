export function AddToReadingList(payload){
    return {
        type: "ADD_TO_READING_LIST",
        payload
    }
}
export function RemoveFromReadingList(payload){
    return {
        type: "REMOVE_FROM_READING_LIST",
        payload
    }
}
export function AddToFinishedList(payload){
    return {
        type: "ADD_TO_FINISHED_LIST",
        payload
    }
}