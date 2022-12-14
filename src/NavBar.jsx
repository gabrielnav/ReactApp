import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from './CartContext';
import CartWidget from './CartWidget';


const NavBar = ({toggle}) => {
    const { cantidadItem } = useCartContext()
    return (
        <>
            <div className="navbar-container" role="navigation">
                <div className="burger-menu" onClick={toggle}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <Link to="/" className="main-title">
                   Kloverstore
                </Link>
                <nav className="nav">
                    <NavLink 
                        to='/productos' 
                        className={(navData) => navData.isActive ? "navlink-active" : "p-4" }>Ver todo</NavLink>
                    <NavLink 
                        to='/category/Invierno' 
                        className={(navData) => navData.isActive ? "navlink-active" : "p-4" }> Invierno</NavLink> 
                    <NavLink 
                        to='/category/Verano' 
                        className={(navData) => navData.isActive ? "navlink-active" : "p-4" }> Verano </NavLink> 
                </nav>
                <Link to='/cart' className="cart-link">
                    <div className="mr-2 text-lg">
                        { cantidadItem() !== 0 && cantidadItem()}
                    </div>
                    <CartWidget /> 
                </Link>    
            </div>
            
        </>
    )
}

export default NavBar