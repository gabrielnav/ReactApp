import { useState, useEffect } from 'react';


export const ItemCount = () => { 
  const [counter, setCounter, stock] = useState(1)

useEffect( () => {
  console.log('Efecto al montaje y cambio en counter');
  // no usar aquí -> setCounter() generará loop infinito
}, [counter])

useEffect( () => {
  console.log('Efecto en cada render');
})

const handleClick = () => {
  console.log('hiciste click');
  setCounter( counter + 1 ) // counter++ -> counter = counter + 1
}
const handleClick1 = () => {
  console.log('hiciste click');
  setCounter( counter - 1 ) // counter++ -> counter = counter + 1
}

console.log('Hubo render');
return (
<div className='my-5'>
  
  <button onClick={handleClick1} className= 'click'> - </button>
  <strong>  {counter}  </strong>
  <button onClick={handleClick} className= 'click'> + </button>
  <button  className= 'click'> Agregar al carrito </button>
  </div>
  
);

};
