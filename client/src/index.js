import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import createStore from '@store';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApiClient } from '@api';

const store = createStore(ApiClient, undefined);

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <App />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Playfair+Display:400,700&display=swap" rel="stylesheet"></link>
    </Provider>
  </Fragment>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
