import React from 'react';
import pinkMarker from '../Images/pink-marker.png';
import './Marker.css';

class Marker extends React.Component {

  render (){
  	return(
    	<div >
          <img className='marker' alt='marker' src={pinkMarker}/>
      </div>
  	)
  }
}

export default Marker;