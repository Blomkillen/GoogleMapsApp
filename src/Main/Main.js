import React from 'react';
import GoogleMaps from './google_maps_container.js';
import ListTable from '../ListTable/list_table_container.js';
import { Navbar } from 'react-bootstrap';
import './Main.css';

class Main extends React.Component {

  render() {
    return (
      <div>
      <Navbar bg="dark" variant='dark'>
        <Navbar.Brand>Google Maps</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <div className='divWrapper'>
        <ListTable />
        <GoogleMaps  zoom={11} defaultCenter={{lat: 59.33258, lng: 18.0649}} />
      </div>
      </div>
    );
  }
}
export default Main;
