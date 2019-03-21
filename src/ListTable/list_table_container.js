import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { changeText } from '../Actions/main_actions.js';
import ListTable from './ListTable.js';



const mapStateToProps = (state) => {
  return {
    bookmarks: state.table.bookmarks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeText }, dispatch); 
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTable)