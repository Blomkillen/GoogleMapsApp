import React from 'react';
import PropTypes from 'prop-types';
import GoogleMaps from './google_maps_container.js';
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
      <div>
        {this.props.text}
        <button onClick={this.changeText} >Click me!</button>
        </div>
        <GoogleMaps zoom={11} center={{lat: 59.95, lng: 30.33}} />
      </div>
      
    );
  }
}

Main.propTypes = {
  changeText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Main;
