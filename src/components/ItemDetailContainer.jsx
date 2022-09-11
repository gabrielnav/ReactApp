
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  itemJson  from "../myItems.json";
import MasInformacion from './ItemDetail';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { detailId } = useParams();
    useEffect(() => {
        const getItem = new Promise((resolve, rejected) => {
            setTimeout(() => {
                itemJson ? resolve(itemJson) : rejected("Error");
            }, 2000);
        });

        getItem
            .then(detailId && (res => setItem(res.find(It => It.id === detailId))))
            .catch(err => console.log(`${err}: No hay nada para vender.`));
    }, [detailId])

    return (
        <section>
            { Object.entries(item).length === 0 ? 
                <div className='ubicarSpinner'>  <div className='spinner'></div>   </div>
            :
               <MasInformacion {...item} />
            }
        </section>
    )
}