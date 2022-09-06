import React from 'react';
import { useState, useEffect } from "react";
import  itemJson  from "../myItems.json";
import {ItemList} from "./ItemList";

export const ItemListContainer = () => {
   const [items, setItems] = useState([]);

   const getItems = (data, time)=> 
     new Promise((resolve, reject)=>{
       setTimeout(()=>{
          if (data){
            resolve(data);
          }else {
            reject("Error");
          }
        },time);
      });

      useEffect(() => {
        getItems(itemJson, 3000)
        .then((res) => {
            setItems(res);
        })
        .catch((err) => console.log(err, ": no hay items"));
      }, []);

      return <div>
      <ItemList item={items}/>
      </div>;
    };  



