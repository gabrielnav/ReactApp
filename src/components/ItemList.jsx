import React from 'react'
import {Item} from "./Item";

export const ItemList = ({Items}) => {
  return (
    <div>
        {Items.length ? (
            Items.map((Item) => <Item key={Item.id} {...Item}/> )
        ) : (
          <h2>Cargando...</h2>
        )}
    </div>
  );
};
