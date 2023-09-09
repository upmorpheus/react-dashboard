import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./features/Counter/Counter"
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Counter />
      </PersistGate>
    </Provider>
  );
};

export default App;
