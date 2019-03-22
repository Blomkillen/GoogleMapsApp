/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

/*
 * other constants
 */

/*
 * action creators
 */

export function addItemToList(item) {
  return { type: ADD_ITEM, item }
}

export function deleteItemToList(id) {
  return { type: DELETE_ITEM, id }
}

export function editItemInList(item) {
  return { type: EDIT_ITEM, item  }
}



