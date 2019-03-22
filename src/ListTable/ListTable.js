import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import star from '../Images/star.jpg';
import './ListTable.css';


 
class ListTable extends React.Component {
  constructor(props) {
    super(props);
    this.formatBookmarks = this.formatBookmarks.bind(this);
    this.bookmarkClick = this.bookmarkClick.bind(this);
    this.quickSearch = this.quickSearch.bind(this);
  }

  bookmarkClick(e){
  	console.log('clicked bookmark', e.target.id);
  	const bookmarkId = e.target.id;
  	const clickedBookmark = this.props.bookmarks.filter((id) => id.id === bookmarkId)[0];
  	console.log('clicked bookmark info ', clickedBookmark);
  	this.props.goToBookmark(clickedBookmark);
  }

  quickSearch() {
  	  var input, filter, table, tr, td, i, name;
	  input = document.getElementById("searchInput");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("bookmarkTable");
	  tr = table.getElementsByTagName("tr");

	  // Loop through all table rows, and hide those who don't match the search query
	  for (i = 0; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[0];
	    if (td) {
	      name = td.textContent || td.innerText;
	      if (name.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    } 
	  }
  }

  formatBookmarks(){
  	return this.props.bookmarks.map((item) => (
  		<tr className='bookmarks' key={shortId.generate()}>
	  		<td id={item.id} onClick={this.bookmarkClick} ><img alt='icon' style={{width: '20px', height: '20px', float: 'left'}} src={star}/>{item.name}</td>
  		</tr>
  		));
  }

  render() {
    return (
    	<div style={{width: '20%' }}>
    	<input type="text" id='searchInput' onKeyUp={this.quickSearch} placeholder="Search for names.."/>
    	<table className='bookmarkTable' id='bookmarkTable'>
    		<tbody>
			  <tr key={shortId.generate()}>
			    <th colSpan='2' className='header' >Bookmarked items</th>
			  </tr>
			    {this.formatBookmarks()}
		  </tbody>
		</table>
		</div>
   	);
  }
}

ListTable.propTypes = {
  bookmarks: PropTypes.array,
  goToBookmark: PropTypes.func.isRequired,
}
 
export default ListTable;