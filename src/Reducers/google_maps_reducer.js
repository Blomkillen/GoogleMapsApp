import {
  PUT_MARKER
} from '../Actions/google_maps_actions.js';

const initialState = {
  text: "",
  lat: null,
  lng: null
}

function google_maps(state = initialState, action) {
  switch (action.type) {
    case PUT_MARKER:
      return Object.assign({}, state, {
            text: action.markerData.text,
            lat: action.markerData.lat,
            lng: action.markerData.lng
          });
    default:
      return state
  }
}

export default google_maps;