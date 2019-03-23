import React from 'react';
import PropTypes from 'prop-types';
import GoogleMaps from './google_maps_container.js';
import ListTable from '../ListTable/list_table_container.js';
import './Main.css';

class Main extends React.Component {

  constructor(props) {
  	super(props);
  	this.changeText = this.changeText.bind(this);
 
  }


  changeText(props){
  	this.props.changeText("Changed Text!");
  }

  	
  render() {
    return (
		<div className="App">
			<div className='topMenu'>
				<h1>Google Maps App</h1>
			</div>
			<div className='divWrapper'>
					<ListTable />
					<GoogleMaps  zoom={11} defaultCenter={{lat: 59.33258, lng: 18.0649}} />
			</div>
		</div>
      
    );
  }
}

Main.propTypes = {
  changeText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

}

export default Main;
