import { combineReducers } from 'redux'
import main from './main_reducer.js'

const googleMapsApp = combineReducers({
  main
})

export default googleMapsApp;