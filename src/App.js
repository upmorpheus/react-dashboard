import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import Users from './views/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;