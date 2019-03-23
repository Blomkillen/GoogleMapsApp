import React from 'react';
import star from '../Images/star.jpg';
import './Marker.css';

class Marker extends React.Component {

  render (){
  	return(
    	<div >
          <img className='marker' alt='marker' src={star}/>
      </div>
  	)
  }
}

export default Marker;