import { useState, useEffect } from 'react';
import './App.css';
import {ItemListContainer} from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {ItemCount} from './components/ItemCount';



function App(props) {
  return (
    <div className='container'>
      <NavBar className='NavBar'/>
      <ItemCount />
     <ItemListContainer />
    </div>
  );
}

export default App;