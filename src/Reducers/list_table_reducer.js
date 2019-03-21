import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM
} from '../Actions/list_table_actions.js';

const initialState = {
  bookmarks: []
}

function list_table(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
           bookmarks: state.bookmarks.concat(action.item)
          });
    case DELETE_ITEM:
      return Object.assign({}, state, {
            
          });
    case EDIT_ITEM:
      return Object.assign({}, state, {
            
          });
    default:
      return state
  }
}

export default list_table;