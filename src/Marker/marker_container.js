import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { putMarkerOnMap } from '../Actions/google_maps_actions.js';
import Marker from './Marker.js';



const mapStateToProps = (state) => {
  return {
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
)(Marker)