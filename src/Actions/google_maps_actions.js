/*
 * action types
 */

export const PUT_MARKER = 'PUT_MARKER';

/*
 * other constants
 */

/*
 * action creators
 */

export function putMarkerOnMap(markerData) {
  return { type: PUT_MARKER, markerData }
}
