import React from 'react';
import { useState, useEffect } from "react";
import  detailJson  from "../myDetail.json";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
   const [items, setItems] = useState([]);
   const { id } = useParams()

   const getItems = (data, time)=> 
     new Promise((resolve, reject)=>{
       setTimeout(()=>{
          if (data){
            resolve(data.find( p => p.id === id ));
          }else {
            reject("Error");
          }
        },time);
      });

      useEffect(() => {
        getItems(detailJson, 3000)
        .then((res) => {
            setItems(res);
        })
        .catch((err) => console.log(err, ": no hay items"));
      }, []);

      return <div className='container'>
      <ItemDetail item={items}/>
      </div>;
    };  

