import React from 'react'
import {Item} from "./Item";

export const ItemList = ({item}) => {
  return (
    <div className='list'>
        {item.length ? (
            item.map((producto) => <Item key={producto.id} {...producto}/> )
        ) : (
          <h2>Cargando...</h2>
        )}
    </div>
  );
};
