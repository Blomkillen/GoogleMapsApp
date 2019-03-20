import {
  CHANGE_TEXT
} from '../Actions/main_actions.js';

const initialState = {
  text: "Hello World",
}

function main(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return Object.assign({}, state, {
            text: action.text
          });
    default:
      return state
  }
}

export default main;