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

    this.textInput = React.createRef();
  }

  bookmarkClick(e){
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

  quickSearch() {
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
        <td style={{verticalAlign: 'middle'}} ><img src={pinkMarkerBookmark} alt='' /></td>
	  		<th className='col-10 ' style={{wordBreak: 'break-all', verticalAlign: 'middle'}} id={item.id} onClick={this.bookmarkClick} >{item.name}</th>
        <td className='col-2' style={{verticalAlign: 'middle'}} ><Button variant='danger' size='sm' id={item.id} onClick={this.deleteBookmark}>X</Button></td>
  		</tr>
  		));
  }

  render() {
    return (
    	<div style={{width: '20%', backgroundColor: 'grey' }}>
      <Table striped hover className='table-dark' >
        <thead>
          <tr>
            <td colSpan='3' style={{verticalAlign: 'middle', textAlign: 'center'}}><h5>Bookmarks</h5></td>
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