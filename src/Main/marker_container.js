import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { putMarkerOnMap, closeModal, openModal } from '../Actions/google_maps_actions.js';
import { addItemToList } from '../Actions/list_table_actions.js';
import Marker from './Marker.js';



const mapStateToProps = (state) => {
  return {
    nameText: state.google.nameText,
    commentText: state.google.commentText,
  	modalOpen: state.google.modalOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ putMarkerOnMap, closeModal, openModal, addItemToList }, dispatch); 
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Marker)