import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { putMarkerOnMap, closeModal, openModal, changeNameText, changeCommentText } from '../Actions/google_maps_actions.js';
import GoogleMaps from './GoogleMaps.js';



const mapStateToProps = (state) => {
  return {
    text: state.google.text,
  	lat: state.google.lat,
  	lng: state.google.lng,
  	modalOpen: state.google.modalOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ putMarkerOnMap, closeModal, openModal, changeNameText, changeCommentText }, dispatch); 
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMaps)