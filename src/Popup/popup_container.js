import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { closeModal } from '../Actions/google_maps_actions.js';
import { addBookmark } from '../Actions/list_table_actions.js';
import Popup from './Popup.js';



const mapStateToProps = (state) => {
  return {
  	showModal: state.google.showModal,
    currentModal: state.google.currentModal,
    currentBookmark: state.google.currentBookmark,
    lat: state.google.lat,
    lng: state.google.lng,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ closeModal, addBookmark }, dispatch);
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup)
