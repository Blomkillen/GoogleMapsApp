import { combineReducers } from 'redux';
import main from './main_reducer.js';
import google from './google_maps_reducer.js';
import table from './list_table_reducer.js';

const googleMapsApp = combineReducers({
  main,
  google,
  table
})

export default googleMapsApp;