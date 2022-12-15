import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import arrayProductos from "./arrayProductos.json";



const ItemListContainer = () => {
     const [items, setItems] = useState({});
         
     useEffect(() => {
      const promesa = new Promise((resolve) =>{
        setTimeout(() => {
          resolve(arrayProductos)
             },2000)

     });
  
     promesa.then((data) => {
         setItems(data)
         })
     }, []);
         return (
        <div className="Container">
              <ItemList item={items}/>
              <ItemCount stockItems={6}/>
           </div>

     )


}

export default ItemListContainer