/*
 * action types
 */

export const PUT_MARKER = 'PUT_MARKER';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CHANGE_NAME_TEXT = 'CHANGE_NAME_TEXT';
export const CHANGE_COMMENT_TEXT = 'CHANGE_COMMENT_TEXT';

/*
 * other constants
 */

/*
 * action creators
 */

export function putMarkerOnMap(markerData) {
  return { type: PUT_MARKER, markerData }
}

export function closeModal() {
  return { type: CLOSE_MODAL }
}

export function openModal() {
  return { type: OPEN_MODAL }
}

export function changeNameText(text) {
  return { type: CHANGE_NAME_TEXT, text }
}

export function changeCommentText(text) {
  return { type: CHANGE_COMMENT_TEXT, text }
}
