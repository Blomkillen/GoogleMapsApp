import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { goToBookmark } from '../Actions/google_maps_actions.js';
import { deleteBookmark } from '../Actions/list_table_actions.js';

import ListTable from './ListTable.js';



const mapStateToProps = (state) => {
  return {
    bookmarks: state.table.bookmarks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ goToBookmark, deleteBookmark }, dispatch); 
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTable)