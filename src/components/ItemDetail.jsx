import React from 'react';
import {ItemCount} from './ItemCount';

const ItemDetail = ({ stock, initial, id, title, img, price, descripcion, diseñador}) => {
  return (
    /*<div >
      <img src={img} alt="" style={{width: "15rem"}} />
      <div >
        <h2>{title}</h2>
        <h4>{diseñador}</h4>
        <p>{descripcion}</p>
        <p>{price}</p>
        <div >

          <ItemCount stock={stock} initial={0} />
        </div>
      </div>
     
    </div>*/
    <article className = 'Card'>
        <h3>{title}</h3>

        <img src={img} alt="" style={{width: "15rem"}} />
        <h4>{diseñador}</h4>
        <p>{descripcion}</p>
        <h3>{price}</h3>
        <ItemCount stock={10} initial={0} />
      </article>
    )
}

export default ItemDetail