import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Productos from "./components/Productos";
import Nosotros from "./components/Nosotros";
import {ItemDetailContainer} from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App(stock, initial) {
  return (
    <div >
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path='/Productos' element={ < Productos />} />
          <Route exact path='/Nosotros' element={ < Nosotros />} />
          <Route exact path='/Productos/:id' element={ < ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;