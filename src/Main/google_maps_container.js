import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { putMarkerOnMap, goToBookmark, addGoogleApiKey } from '../Actions/google_maps_actions.js';
import GoogleMaps from './GoogleMaps.js';



const mapStateToProps = (state) => {
  return {
  	lat: state.google.lat,
  	lng: state.google.lng,
  	zoom: state.google.zoom,
  	showModal: state.google.showModal,
    currentModal: state.google.currentModal,
    showMarker: state.google.showMarker,
  	bookmarkClicked: state.google.bookmarkedClicked,
    googleApiKey: state.google.googleApiKey,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ putMarkerOnMap, goToBookmark, addGoogleApiKey }, dispatch);
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMaps)
