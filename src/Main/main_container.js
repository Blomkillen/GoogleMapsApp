import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { changeText } from '../Actions/main_actions.js';
import Main from './Main.js';



const mapStateToProps = (state) => {
  return {
    text: state.main.text,
    zoom: state.google.zoom,
    lat: state.google.lat,
    lng: state.google.lng
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeText }, dispatch); 
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)