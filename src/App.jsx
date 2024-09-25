import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Candy from './Candy';
import Chips from './Chips';
import Cookie from './Cookie';
import Soda from './Soda';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/soda' element={<Soda />} />
          <Route path='/candy' element={<Candy />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/cookie' element={<Cookie />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
