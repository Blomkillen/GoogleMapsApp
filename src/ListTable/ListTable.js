import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import star from '../Images/star.jpg';
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
  	console.log('clicked bookmark', e.target.id);
  	const bookmarkId = e.target.id;
  	const clickedBookmark = this.props.bookmarks.filter((id) => id.id === bookmarkId)[0];
  	console.log('clicked bookmark info ', clickedBookmark);
  	this.props.goToBookmark(clickedBookmark);
  }

  deleteBookmark(e) {
    console.log('deleting bookmark', e.target.id);
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
	  		<th className='col-10 ' style={{wordBreak: 'break-all', verticalAlign: 'middle'}} id={item.id} onClick={this.bookmarkClick} >{item.name}</th>
        <td className='col-2' style={{verticalAlign: 'middle'}} ><Button variant='danger' id={item.id} onClick={this.deleteBookmark}>X</Button></td>
  		</tr>
  		));
  }

  render() {
    return (
    	<div style={{width: '20%' }}>
      <Table striped hover>
        <thead>
          <tr>
            <td colSpan='2' style={{verticalAlign: 'middle', textAlign: 'center'}}>Bookmarks</td>
          </tr>
          <tr>
            <td colSpan='2' >
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
  bookmarks: PropTypes.array,
  goToBookmark: PropTypes.func.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
}
 
export default ListTable;