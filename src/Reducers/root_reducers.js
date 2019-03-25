import { combineReducers } from 'redux';
import google from './google_maps_reducer.js';
import table from './list_table_reducer.js';

const googleMapsApp = combineReducers({
  google,
  table
})

export default googleMapsApp;
