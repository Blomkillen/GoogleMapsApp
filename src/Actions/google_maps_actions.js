export const PUT_MARKER = 'PUT_MARKER';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const GO_TO_BOOKMARK = 'GO_TO_BOOKMARK';
export const ADD_API_KEY = 'ADD_API_KEY';


export function putMarkerOnMap(markerData) {
  return { type: PUT_MARKER, markerData }
}

export function closeModal() {
  return { type: CLOSE_MODAL }
}

export function goToBookmark(bookmark) {
  return { type: GO_TO_BOOKMARK, bookmark  }
}

export function addGoogleApiKey(key) {
  return { type: ADD_API_KEY, key  }
}
