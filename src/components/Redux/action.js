export const AddToRedaingList = (payload) => {
  return {
    type: 'AddToCard',
    payload: payload,
  }
}

export const RemoveFromReadingList = (payload) => {
  return {
    type: 'removefromCard',
    payload: payload,
  }
}

export const fineshedreading = (payload) => {
  return {
    type: 'fineshedBook',
    payload,
  }
}
