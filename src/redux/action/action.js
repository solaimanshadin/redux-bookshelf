export function addToReadingList(payLoad) {
  return {
    type: "ADD_TO_READING_LIST",
    payLoad,
  };
}

export function removeFromReadingList(payLoad) {
  return {
    type: "REMOVE_FROM_READING_LIST",
    payLoad,
  };
}
export function addToFinishList(payLoad) {
  return {
    type: "ADD_TO_FINISH_LIST",
    payLoad,
  };
}
