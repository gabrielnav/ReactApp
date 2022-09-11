import { useState, useEffect } from 'react';
import './App.css';
import {ItemListContainer} from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App(stock, initial) {
  return (
    <div >
      <BrowserRouter>
      <NavBar />
      <ItemDetailContainer />
        <Routes>
          <Route exact path='/' element={ <ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;