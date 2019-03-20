import React from 'react';
import PropTypes from 'prop-types';

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
        {this.props.text}
        <button onClick={this.changeText} >Click me!</button>
      </div>
      
    );
  }
}

Main.propTypes = {
  changeText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Main;
