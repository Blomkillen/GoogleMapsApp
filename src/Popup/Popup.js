import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import { Modal, Button, Form } from 'react-bootstrap';
import './Popup.css'


class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', comment: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addBookmarkModal = this.addBookmarkModal.bind(this);

  }

  handleNameChange(event) {
    //Another way to retrieve the value from the Form tag
    this.setState({name: event.target.value });
  }

  handleCommentChange(event) {

    this.setState({comment: event.target.value });
  }


  handleSubmit(event) {
    this.props.addBookmark({
    	name: this.state.name,
    	comment: this.state.comment,
    	lat: this.props.lat,
    	lng: this.props.lng,
      zoom: this.props.zoom,
    	id: shortId.generate()
    });
    this.setState({name: '', comment: ''});
    this.props.closeModal();

  }

  addBookmarkModal(){
    return(
      <Modal.Dialog className='add-bookmark-window'>
        <Modal.Header className='bg-dark'>
          <Modal.Title className='white-text'>Add Bookmark</Modal.Title>
        </Modal.Header>

        <Modal.Body className='bg-dark'>
          <Form>
            <Form.Group controlId="bookmarkName">
              <Form.Label className='white-text'>Name</Form.Label>
              <Form.Control onChange={this.handleNameChange} type="text" placeholder="Enter Name" />
              <Form.Text id='popupName' className="white-text">
                Name your bookmark.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="bookmarkComment">
              <Form.Label className='white-text'>Comment</Form.Label>
              <Form.Control onChange={this.handleCommentChange} type="text" placeholder="Comment..." />
              <Form.Text id='popupComment' className="white-text">
                Comments on your bookmark.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className='justify-content-center bg-dark'>
          <Button variant="danger" onClick={this.props.closeModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Save
            </Button>
        </Modal.Footer>
      </Modal.Dialog>
      );
  }

  displayBookmarkModal(){
    return (
      <Modal.Dialog className='display-bookmark-window'>
        <Modal.Header className='bg-dark'>
          <Modal.Title className='white-text'>{this.props.currentBookmark.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          <div>
            <label className='white-text'>
              <h6>{this.props.currentBookmark.comment}</h6>
            </label>
          </div>

        </Modal.Body>

        <Modal.Footer className='bg-dark justify-content-between'>
            <div>
              <div><label className='white-text'>Lat:{this.props.currentBookmark.lat}</label></div>
              <div><label className='white-text'>Lng:{this.props.currentBookmark.lng}</label></div>
            </div>
            <Button variant="primary" size='sm' onClick={this.props.closeModal}>
              Close
            </Button>
        </Modal.Footer>
      </Modal.Dialog>
      );
  }

  render (){
  	return(
      //One modal for adding bookmark and one for displying
  	  this.props.currentModal === 'add' ? this.addBookmarkModal() : this.displayBookmarkModal()
  	);
  }
}
Popup.propTypes = {
  closeModal: PropTypes.func.isRequired,
  currentModal: PropTypes.string,
  currentBookmark: PropTypes.object.isRequired,
  addBookmark: PropTypes.func.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number.isRequired,
}

export default Popup;
