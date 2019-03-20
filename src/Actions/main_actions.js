/*
 * action types
 */

export const CHANGE_TEXT = 'CHANGE_TEXT';

/*
 * other constants
 */

/*
 * action creators
 */

export function changeText(text) {
  return { type: CHANGE_TEXT, text }
}
