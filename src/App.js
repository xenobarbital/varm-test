import React from 'react';
import './App.css';

import { NavBar, BlockOne, BlockTwo } from './components';

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <BlockOne />
      <BlockTwo />
    </div>
  );
}

export default App;
