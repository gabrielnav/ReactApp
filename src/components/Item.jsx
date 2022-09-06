import React from 'react';
import {ItemCount} from './ItemCount';

export const Item = ({ title, img, price}) => {
  return (
    <article className = 'Card'>
        <h3>{title}</h3>

        <img src={img} alt="" style={{width: "15rem"}} />

        <h3>{price}</h3>
        <ItemCount />
      </article>
    
  );
};

