import React from 'react';


export const Item = ({ title, img, price}) => {
  return (
    <article>
        <h3>{title}</h3>

        <img src={img} alt="" style={{width: "15rem"}} />

        <h3>{price}</h3>
        

    </article>
    
  );
};

