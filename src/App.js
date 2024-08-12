import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Artwork from './components/Artwork'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/artwork' element={<Artwork/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;