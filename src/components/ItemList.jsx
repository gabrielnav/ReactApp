import React from 'react'
import { Link } from "react-router-dom";
import {Item} from "./Item";

export const ItemList = ({item}) => {
  return (
    <div className='list'>
        {item.length ? (
            item.map((producto) =>(  
            <Link to={`/Productos/${producto.id}`}> 
             <Item key={producto.id} {...producto}/> 
             </Link>
             ))
        ) : (
          <h2>Cargando...</h2>
        )}
    </div>
  );
};
