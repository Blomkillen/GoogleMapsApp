import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { putMarkerOnMap } from '../Actions/google_maps_actions.js';
import GoogleMaps from './GoogleMaps.js';



const mapStateToProps = (state) => {
  return {
    text: state.google.text,
  	lat: state.google.lat,
  	lng: state.google.lng
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ putMarkerOnMap }, dispatch); 
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMaps)