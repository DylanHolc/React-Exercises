import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import RoutesComponent from './RoutesComponent';

import './css/App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesComponent />
      </BrowserRouter>
    </>
  )
}

export default App
