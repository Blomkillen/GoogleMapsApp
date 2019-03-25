import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import pinkMarkerBookmark from '../Images/pink-marker-bookmark.png';
import { Table, Button, Form } from 'react-bootstrap';
import './ListTable.css';



class ListTable extends React.Component {
  constructor(props) {
    super(props);
    this.formatBookmarks = this.formatBookmarks.bind(this);
    this.bookmarkClick = this.bookmarkClick.bind(this);
    this.quickSearch = this.quickSearch.bind(this);
    this.deleteBookmark = this.deleteBookmark.bind(this);

    //reference to get the value from the Form tag
    this.textInput = React.createRef();
  }

  bookmarkClick(e){
    //If the modal is poen you can't click the map so
    //that the marker change position
    if(!this.props.showModal){
      const bookmarkId = e.target.id;
      const clickedBookmark = this.props.bookmarks.filter((id) => id.id === bookmarkId)[0];
      this.props.goToBookmark(clickedBookmark);
    }
  }

  deleteBookmark(e) {
    const bookmarkId = e.target.id;
    this.props.deleteBookmark(bookmarkId);
  }

  quickSearch() { //search for bookmarks by only showing the ones matching the search query
  	let filter, tbody, tr, th, i, name;
	  filter = this.textInput.current.value.toUpperCase();
	  tbody = document.getElementById("bookmarkBody");
    tr = tbody.getElementsByTagName('tr');

	  for (i = 0; i < tr.length; i++) {
	    th = tr[i].getElementsByTagName("th")[0];
	    if (th) {
	      name = th.textContent || th.innerText;
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
  		<tr className='bookmarks justify-content-between' key={shortId.generate()}>
        <td className='bookmark-icon'><img src={pinkMarkerBookmark} alt='' /></td>
        <th className='col-10 bookmark-name' id={item.id} onClick={this.bookmarkClick} >{item.name}</th>
        <td className='col-2 bookmark-icon'><Button variant='danger' size='sm' id={item.id} onClick={this.deleteBookmark}>X</Button></td>
  		</tr>
  		));
  }

  render() {
    return (
    	<div style={{width: '20%', backgroundColor: 'grey' }}>
      <Table striped hover className='table-dark' >
        <thead>
          <tr>
            <td className='table-head bookmark-header' colSpan='3'><h5>Bookmarks</h5></td>
          </tr>
          <tr>
            <td colSpan='3' >
              <Form id='searchForm' onKeyUp={this.quickSearch} >
                <Form.Group controlId="searchBookmarks">
                  <Form.Control ref={this.textInput} type="text" placeholder="Search for bookmarks..." />
                </Form.Group>
              </Form>
            </td>
          </tr>
        </thead>
        <tbody id='bookmarkBody'>
            {this.formatBookmarks()}
        </tbody>
      </Table>
		</div>
   	);
  }
}

ListTable.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  goToBookmark: PropTypes.func.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
}

export default ListTable;
