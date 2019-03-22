import React from 'react';
import PropTypes from 'prop-types';
import Map from 'google-map-react';
import Marker from './marker_container.js';


 
class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLoad: true,
      center: this.props.defaultCenter,
      zoom: this.props.zoom

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChildClick = this.handleChildClick.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
 
  }

  componentDidUpdate(prevProps){
     if (this.props.bookmarkClicked !== prevProps.bookmarkClicked) {
      console.log('updateing compinent...');
      this.setState({
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: this.props.zoom,      
    });
    }
    
  }


  handleClick({ x, y, lat, lng, event }){
    console.log('clicked the map...');
    console.log('lat: ', lat);
    console.log('lng: ', lng);
    console.log('x: ', x);
    console.log('y: ', y);
    this.setState({
      firstLoad: false,
      center: {lat: lat, lng: lng },
      zoom: 11,      
    });
    this.props.putMarkerOnMap({lat: lat, lng: lng });
    console.log(this.state);
  }

  putMarkerOnMap(){
    console.log('submit clicked...');
  }

  handleChildClick(){
    console.log('clicking child...');
    this.props.openModal();
  }

  onChangeEvent({center, zoom}){
    this.setState({
      center: center,
      zoom: zoom,      
    });
    console.log('state after change', this.state);
    console.log('change occured');
  }


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '80%'}}>
        <Map
          bootstrapURLKeys={{ key: 'AIzaSyD-uqYxDHqx4cIyDH7s0zvTxuRMdRsjhtM' }}
          onChange={this.onChangeEvent}
          center={this.state.center ? this.state.center : this.props.defaultCenter}
          zoom={this.state.zoom ? this.state.zoom : this.props.zoom}
          onChildClick={this.handleChildClick}
          onClick={this.props.modalOpen ? null : this.handleClick }
        >
        {this.state.firstLoad === true ? null : <Marker lat={this.props.lat} lng={this.props.lng} />}
        </Map>
      </div>
    );
  }
}

GoogleMaps.propTypes = {
  defaultCenter: PropTypes.object.isRequired,
  center: PropTypes.object,
  zoom: PropTypes.number.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
  modalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  putMarkerOnMap: PropTypes.func.isRequired,
  bookmarkClicked: PropTypes.bool.isRequired,
}
 
export default GoogleMaps;