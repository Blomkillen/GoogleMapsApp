export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function addBookmark(item) {
  return { type: ADD_ITEM, item }
}

export function deleteBookmark(id) {
  return { type: DELETE_ITEM, id }
}




