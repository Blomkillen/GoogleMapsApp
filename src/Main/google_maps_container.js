import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { putMarkerOnMap, closeModal, openModal, goToBookmark } from '../Actions/google_maps_actions.js';
import GoogleMaps from './GoogleMaps.js';



const mapStateToProps = (state) => {
  return {
    text: state.google.text,
  	lat: state.google.lat,
  	lng: state.google.lng,
  	zoom: state.google.zoom,
  	modalOpen: state.google.modalOpen,
  	bookmarkClicked: state.google.bookmarkedClicked
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ putMarkerOnMap, closeModal, openModal, goToBookmark }, dispatch); 
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMaps)