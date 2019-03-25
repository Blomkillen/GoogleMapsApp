import React from 'react';
import PropTypes from 'prop-types';
import Map from 'google-map-react';
import Marker from '../Marker/marker_container.js';
import Popup from '../Popup/popup_container.js';
import { Modal, Button, Form } from 'react-bootstrap';

class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: this.props.defaultCenter,
      zoom: this.props.zoom,

    };
    this.handleClick = this.handleClick.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.handleKeySubmit = this.handleKeySubmit.bind(this);

    //reference to get the value from the Form tag
    this.textInput = React.createRef();

  }

  componentDidUpdate(prevProps){
    //Updates the local state when a bookmarked is clicked since the
    //Google maps object doesn't respond to parent state changes.
    //So the center and zoom variables has to be in local state.
     if (this.props.bookmarkClicked !== prevProps.bookmarkClicked) {
      this.setState({
        center: { lat: this.props.lat, lng: this.props.lng },
        zoom: this.props.zoom,
      });
    }
  }

  handleClick({ x, y, lat, lng, event }){
    this.setState({
      center: {lat: lat, lng: lng },
      //if the current zoom is below 11, it won't zoom out to the default 11
      zoom: this.state.zoom <= 11 ? 11 : this.state.zoom,
    });
    this.props.putMarkerOnMap({lat: lat, lng: lng, zoom: this.state.zoom });
  }

  onChangeEvent({center, zoom}){
    //Updates local state when user pans or zooms the map.
    this.setState({
      center: center,
      zoom: zoom,
    });
  }

  handleKeySubmit(e){
    this.props.addGoogleApiKey(this.textInput.current.value);
  }

  render() {
    //I dont know if all API keys are of length 39(?!)
    if(this.props.googleApiKey.length < 39){
      return(
      <Modal.Dialog>
        <Modal.Header className='bg-dark'>
          <Modal.Title className='white-text'>Google API Key</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          <Form>
            <Form.Group controlId="bookmarkName">
              <Form.Label className='white-text'>Name</Form.Label>
              <Form.Control ref={this.textInput} type="text" placeholder="Enter API Key" />
              <Form.Text id='popupName' className="white-text">
                Enter your Google API Key
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className='bg-dark justify-content-between'>
            <Button variant="primary" size='sm' onClick={this.handleKeySubmit}>
              OK
            </Button>
        </Modal.Footer>
      </Modal.Dialog>
      );
    } else {
      return (
        <div style={{ height: '90vh', width: '80%'}}>
          <Map
            bootstrapURLKeys={{ key: this.props.googleApiKey }}
            onChange={this.onChangeEvent}
            center={this.state.center ? this.state.center : this.props.defaultCenter}
            zoom={this.state.zoom ? this.state.zoom : this.props.zoom}
            onClick={this.props.showModal === true ? null : this.handleClick }
          >
          {this.props.showModal === true ? <Popup lat={this.props.lat} lng={this.props.lng} zoom={this.state.zoom} /> : null}
          {this.props.showMarker === true ? <Marker lat={this.props.lat} lng={this.props.lng} /> : null}
          </Map>
        </div>
      );
    }
  }
}

GoogleMaps.propTypes = {
  defaultCenter: PropTypes.object.isRequired,
  center: PropTypes.object,
  zoom: PropTypes.number.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
  showMarker: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  putMarkerOnMap: PropTypes.func.isRequired,
  bookmarkClicked: PropTypes.bool.isRequired,
  addGoogleApiKey: PropTypes.func.isRequired,
  googleApiKey: PropTypes.string,
}

export default GoogleMaps;
