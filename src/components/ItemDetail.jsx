import React from 'react';
import {ItemCount} from './ItemCount';

const MasInformacion = ({ stock, initial, title, img, price, descripcion, diseñador}) => {
  return (
    <div className='box-detail'>
      <img src={img} alt="" style={{width: "15rem"}} />
      <div className='box-info'>
        <h2>{title}</h2>
        <h4>{diseñador}</h4>
        <p>{descripcion}</p>
        <p className='price'>ar$ {price}</p>
        <div className='box-info__buy'>

          <ItemCount stock={stock} initial={0} />
        </div>
      </div>
     
    </div>
  )
}

export default MasInformacion