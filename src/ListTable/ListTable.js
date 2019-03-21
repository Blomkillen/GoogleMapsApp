import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import star from '../Images/star.jpg';


 
class ListTable extends React.Component {
  constructor(props) {
    super(props);
    this.formatBookmarks = this.formatBookmarks.bind(this);
  }

  formatBookmarks(){
  	return this.props.bookmarks.map((item) => (
  		<tr key={shortId.generate()}>
	  		<td><img style={{width: '20px', height: '20px'}} src={star}/>{item.name}</td>
	  		<td>{item.comment}</td>
  		</tr>
  		));
  }

  render() {
    return (
    	<div style={{width: '20%' }}>
    	<table >
    		<tbody>
			  <tr key={shortId.generate()}>
			    <th>Bookmarked items</th>
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
}
 
export default ListTable;