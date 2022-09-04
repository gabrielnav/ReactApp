 /*const ItemListContainer = ( {greeting} ) => {
    return (
      <div className="greeting"> {greeting} </div>
    )
  }
  export default ItemListContainer */

import React from 'react';
import { useState, useEffect } from "react";
import  myItemJson  from "../myItems";
import {ItemList} from "./ItemList";

export const ItemListContainer = () => {
   const [list, SetList] = useState([]);

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
        getItems(myItemJson, 3000)
        .then((res) => {
            SetList(res);
        })
        .catch((err) => console.log(err, ": no hay items"));
      }, []);

      return <div>
      <ItemList Items={list}/>
      </div>;
    };  



   /* return (
      <div>ItemListContainer</div>
    )
  };


  
  */