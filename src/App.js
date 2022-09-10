import { useState, useEffect } from 'react';
import './App.css';
import {ItemListContainer} from './components/ItemListContainer';
import NavBar from './components/NavBar';




function App(stock, initial) {
  return (
    <div className='container'>
      <NavBar className='NavBar'/>
     <ItemListContainer />
    </div>
  );
}

export default App;