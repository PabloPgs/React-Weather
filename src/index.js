import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storeFunc from './redux/store';

import './sass/index.scss';
import App from './App';

const app = (
  <Provider store={storeFunc().store}>
    <PersistGate loading={null} persistor={storeFunc().persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
