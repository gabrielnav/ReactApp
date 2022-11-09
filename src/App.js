import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  {Helmet, HelmetProvider} from 'react-helmet-async';
import CartContextProvider from './CartContext';
import NavBar from './NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {Cart}  from './components/Cart';
import Hero from './components/Hero';
import Dropdown from './components/Dropdown';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import  './App.css';




function App() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  
  useEffect(() => {
      const hideMenu =()=>{
          if(window.innerWidth > 768 && isOpen){
              setIsOpen(false)
          }
      }
      window.addEventListener('resize', hideMenu)
      return () => {
          window.removeEventListener('resize', hideMenu)
      }

      
  })


  return (
    <HelmetProvider>
        <Helmet>
            <title>Kloverstore</title>
        </Helmet>
        <CartContextProvider>
            <BrowserRouter>
                <NavBar toggle={toggle}/>
                <Dropdown isOpen={isOpen} toggle={toggle}/>
                <Routes>
                    <Route exact path='/' element={ <Hero /> }/>   
                    <Route exact path='/productos' element={ <ItemListContainer greetings="Kloverstore tiene para vos lo último en moda." /> }/>
                    <Route exact path='/category/:categoryId' element={ <ItemListContainer greetings="Buscas algo más específico? Aquí por categorías:"/> }/>
                    <Route exact path='/details/:detailId' element={ <ItemDetailContainer /> }/> 
                    <Route exact path='/cart' element={ <Cart /> } />
                    <Route exact path='/checkout' element={ <Checkout /> } />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </CartContextProvider>

    </HelmetProvider>
  )
}

export default App
