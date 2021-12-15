export const addToReadingList = (payload) => {
  return { type: "ADD_TO_READING_LIST", payload };
};

export const removeFromReadingList = (payload) => {
    return { type: "REMOVE_FROM_READING_LIST", payload };
  };
  
export const addToFinishedList =(payload)=>{
  return {type:'ADD_TO_FINISHED_LIST',payload}
}
