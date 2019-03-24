import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import { Modal, Button, Form } from 'react-bootstrap';
import './Popup.css'


class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', comment: ''};

    this.inputName = React.createRef();
    this.inputComment = React.createRef();


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
      <Modal.Dialog className='add-bookmark-window'>
        <Modal.Header>
          <Modal.Title>Add Bookmark</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="bookmarkName">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={this.inputName} onChange={this.handleNameChange} type="text" placeholder="Enter Name" />
              <Form.Text id='popupName' className="text-muted">
                Name your bookmark.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="bookmarkComment">
              <Form.Label>Comment</Form.Label>
              <Form.Control ref={this.inputComment} onChange={this.handleCommentChange} type="text" placeholder="Comment..." />
              <Form.Text id='popupComment' className="text-muted">
                Comments on your bookmark.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={this.props.closeModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Save
            </Button>
        </Modal.Footer>
      </Modal.Dialog>
      /*
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
        </div>*/
      );
  }

  displayBookmarkModal(){
    return (
      <Modal.Dialog className='display-bookmark-window'>
        <Modal.Header>
          <Modal.Title>Bookmark</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <label>
              Name:
              {this.props.currentBookmark.name}
            </label>
          </div>
          <div>
            <label>
              Comment:
              {this.props.currentBookmark.comment}
            </label>
          </div>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary" onClick={this.props.closeModal}>
              Close
            </Button>
        </Modal.Footer>
      </Modal.Dialog>
      );
  }

  render (){
  	return(
  	 this.props.currentModal === 'add' ? this.addBookmarkModal() : this.displayBookmarkModal() 
  	);
  }
}
Popup.propTypes = {
  closeModal: PropTypes.func.isRequired,
  currentModal: PropTypes.string,
  currentBookmark: PropTypes.object.isRequired,
  addBookmark: PropTypes.func.isRequired,
  nameText: PropTypes.string,
  commetText: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
}

export default Popup;