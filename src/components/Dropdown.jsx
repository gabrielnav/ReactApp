import React from 'react'
import { Link } from 'react-router-dom'


const Dropdown = ({isOpen, toggle}) => {
    return (
        <div 
            className={
                isOpen 
                    ? 'dropdown-open' 
                    : 'hidden'
            }
            onClick={toggle}
        >
            <Link to='/productos' className="p-4">Ver todo</Link>
            <Link to='/category/invierno' className="p-4"> Temporada Invierno </Link> 
            <Link to='/category/Verano' className="p-4"> Temporada Verano </Link> 
        </div>
    )
}

export default Dropdown