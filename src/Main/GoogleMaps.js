import React from 'react';
import PropTypes from 'prop-types';
import Map from 'google-map-react';
import Marker from './marker_container.js';


 
class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChildClick = this.handleChildClick.bind(this);
 
  }

  handleClick({ x, y, lat, lng, event }){
    console.log('clicked the map...');
    console.log('lat: ', lat);
    console.log('lng: ', lng);
    console.log('x: ', x);
    console.log('y: ', y);
    this.props.putMarkerOnMap({ text: 'Marker', lat: lat, lng: lng });
  }

  putMarkerOnMap(){
    console.log('submit clicked...');
  }

  handleChildClick(){
    console.log('clicking child...');
    this.props.openModal();
  }


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '80%'}}>
        <Map
          bootstrapURLKeys={{ key: 'AIzaSyD-uqYxDHqx4cIyDH7s0zvTxuRMdRsjhtM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildClick={this.handleChildClick}
          onClick={this.props.modalOpen ? null : this.handleClick }
        >
        <Marker lat={this.props.lat} lng={this.props.lng} />
        </Map>
      </div>
    );
  }
}

GoogleMaps.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
  modalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
}
 
export default GoogleMaps;