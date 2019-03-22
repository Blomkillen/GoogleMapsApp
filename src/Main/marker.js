import React from 'react';
import PropTypes from 'prop-types';
import star from '../Images/star.jpg';
import shortId from 'shortid';

class Marker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', comment: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }

  handleNameChange(event) {
  	
    this.setState({name: event.target.value });
  }

  handleCommentChange(event) {
  	
    this.setState({comment: event.target.value });
  }

  handleSubmit(event) {
    console.log('Submit ', this.state);
    this.props.addItemToList({
    	name: this.state.name,
    	comment: this.state.comment,
    	lat: this.props.lat,
    	lng: this.props.lng,
    	id: shortId.generate()
    });
    this.setState({name: '', comment: ''});
    this.props.closeModal();

  }

  render (){
  	return(
  	<div className='mapWindow' >
            <div className="modal-wrapper"
                style={{
                    transform: this.props.modalOpen ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.modalOpen ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Modal Header</h3>
                    <span className="close-modal-btn" onClick={this.props.closeModal}>×</span>
                </div>
                <div className="modal-body">
                   <div>
			        <label>
			          Name:
			          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
			        </label>
			        </div>
			        <div>
			        <label>
			          Comment:
			          <input type="text" value={this.state.comment} onChange={this.handleCommentChange} />
			        </label>
			        </div>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={this.props.closeModal}>Cancel</button>
                    <button className="btn-continue" onClick={this.handleSubmit}>Save</button>
                </div>
            </div>
            <img className='marker' alt='marker' src={star}/>
        </div>
  	)
  }
}
Marker.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  addItemToList: PropTypes.func.isRequired,
  nameText: PropTypes.string,
  commetText: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
}

export default Marker;