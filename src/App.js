import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss';
import Home from './components/Home/home';
import Basket from './components/Basket/basket'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
}

export default App;
