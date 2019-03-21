import {
  PUT_MARKER,
  CLOSE_MODAL,
  OPEN_MODAL,
  CHANGE_NAME_TEXT,
  CHANGE_COMMENT_TEXT
} from '../Actions/google_maps_actions.js';

const initialState = {
  text: "",
  lat: null,
  lng: null,
  modalOpen: false,
  nameText: "",
  commentText: "",
}

function google_maps(state = initialState, action) {
  switch (action.type) {
    case PUT_MARKER:
      return Object.assign({}, state, {
            text: action.markerData.text,
            lat: action.markerData.lat,
            lng: action.markerData.lng,
            modalOpen: true
          });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
            modalOpen: false
          });
    case OPEN_MODAL:
      return Object.assign({}, state, {
            modalOpen: true
          });
    case CHANGE_NAME_TEXT:
      return Object.assign({}, state, {
            nameText: action.text
          });
    case CHANGE_COMMENT_TEXT:
      return Object.assign({}, state, {
            commentText: action.text
          });
    default:
      return state
  }
}

export default google_maps;