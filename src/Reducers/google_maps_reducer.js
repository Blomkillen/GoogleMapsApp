import {
  PUT_MARKER,
  CLOSE_MODAL,
  OPEN_MODAL,
  CHANGE_NAME_TEXT,
  CHANGE_COMMENT_TEXT,
  GO_TO_BOOKMARK,
  ADD_API_KEY
} from '../Actions/google_maps_actions.js';

const initialState = {
  text: '',
  lat: 59.33258,
  lng: 18.0649,
  zoom: 11,
  center: undefined,
  showModal: false,
  currentModal: '',
  currentBookmark: {},
  showMarker: false,
  nameText: '',
  commentText: '',
  bookmarkedClicked: false,
  googleApiKey: '',
}

function google_maps(state = initialState, action) {
  switch (action.type) {
    case PUT_MARKER:
      return Object.assign({}, state, {
            text: action.markerData.text,
            lat: action.markerData.lat,
            lng: action.markerData.lng,
            center: {lat: action.markerData.lat, lng: action.markerData.lng},
            showModal: true,
            currentModal: 'add',
            showMarker: true,
            bookmarkedClicked: false
          });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
            showModal: false,
            showMarker: false,
            bookmarkedClicked: false,
          });
    case OPEN_MODAL:
      return Object.assign({}, state, {
            showModal: true
          });
    case CHANGE_NAME_TEXT:
      return Object.assign({}, state, {
            nameText: action.text
          });
    case CHANGE_COMMENT_TEXT:
      return Object.assign({}, state, {
            commentText: action.text
          });
    case ADD_API_KEY:
      return Object.assign({}, state, {
            googleApiKey: action.key
          });
    case GO_TO_BOOKMARK:
      return Object.assign({}, state, {
            lat: action.bookmark.lat,
            lng: action.bookmark.lng,
            center: {lat: action.bookmark.lat, lng: action.bookmark.lng},
            zoom: action.bookmark.zoom,
            showModal: true,
            currentModal: 'display',
            currentBookmark: action.bookmark,
            showMarker: true,
            bookmarkedClicked: true
          });
    default:
      return state
  }
}

export default google_maps;