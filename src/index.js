import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import googleMapsApp from './Reducers/root_reducers.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';

const store = createStore(googleMapsApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)