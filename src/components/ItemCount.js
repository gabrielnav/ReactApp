import { useState} from 'react';


export const ItemCount = ({stock, initial}) => { 
  const [counter, setCounter] = useState(initial)
 

 const aumentar = () => counter < stock && setCounter(next => next +1);
    const disminuir = () => counter > 0 && setCounter(prev => prev -1);
let btnAdd = 'addCart';
    let btnIncrease = 'increase';
    let btnDecrease = 'decrease';
    
    stock === 0 && (btnAdd = 'block');
    counter === 0 && (btnDecrease = 'cantDecrease');
    counter === stock && (btnIncrease = 'cantIncrease');


return (
<div className='counterBox' >
            {stock === 0 ? (
                <div className='divNoStock'>
                    <p className='noStock'>sin stock.</p>
                </div>
            ) : (
                <div className='divSiStock'>
                    <button className={btnDecrease} onClick={() => disminuir()} disabled={counter === initial}> - </button>
                    <p>{counter}</p>
                    <button className={btnIncrease} onClick={() => aumentar()} disabled={counter === stock}> + </button>
                    
                    </div>
                    )}
                    <button className={btnAdd} disabled={stock === 0} > agregar</button>
                </div>
);

};


