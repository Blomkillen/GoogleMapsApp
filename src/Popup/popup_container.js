import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { closeModal, openModal } from '../Actions/google_maps_actions.js';
import { addBookmark } from '../Actions/list_table_actions.js';
import Popup from './Popup.js';



const mapStateToProps = (state) => {
  return {
    nameText: state.google.nameText,
    commentText: state.google.commentText,
  	showModal: state.google.showModal,
    currentModal: state.google.currentModal,
    currentBookmark: state.google.currentBookmark,
    lat: state.google.lat,
    lng: state.google.lng,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ closeModal, openModal, addBookmark }, dispatch); 
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup)