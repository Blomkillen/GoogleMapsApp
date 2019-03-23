import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import './Modal.css'


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', comment: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addBookmarkModal = this.addBookmarkModal.bind(this);
 
  }

  handleNameChange(event) {
  	
    this.setState({name: event.target.value });
  }

  handleCommentChange(event) {
  	
    this.setState({comment: event.target.value });
  }


  handleSubmit(event) {
    console.log('Submit ', this.state);
    this.props.addBookmark({
    	name: this.state.name,
    	comment: this.state.comment,
    	lat: this.props.lat,
    	lng: this.props.lng,
    	id: shortId.generate()
    });
    this.setState({name: '', comment: ''});
    this.props.closeModal();

  }

  addBookmarkModal(){
    return(
      <div className='modal-window' >
            <div className="modal-wrapper"
                >
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
        </div>
      );
  }

  displayBookmarkModal(){
    return (
      <div className='modal-window' >
            <div className="modal-wrapper"
                >
                <div className="modal-header">
                    <h3>Modal Header</h3>
                    <span className="close-modal-btn" onClick={this.props.closeModal}>×</span>
                </div>
                <div className="modal-body">
                   <div>
              <label>
                Name:
                {this.props.currentBookmark.name}
              </label>
              </div>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={this.props.closeModal}>Close</button>
                </div>
            </div>
        </div>
      );
  }

  render (){
  	return(
  	 this.props.currentModal === 'add' ? this.addBookmarkModal() : this.displayBookmarkModal() 
  	);
  }
}
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  currentModal: PropTypes.string,
  currentBookmark: PropTypes.object.isRequired,
  addBookmark: PropTypes.func.isRequired,
  nameText: PropTypes.string,
  commetText: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
}

export default Modal;