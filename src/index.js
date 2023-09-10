import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';
import reportWebVitals from './reportWebVitals';
import configStorage from './store'
import 'bootstrap/dist/css/bootstrap.min.css';

const { store, persistor } = configStorage();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

reportWebVitals();