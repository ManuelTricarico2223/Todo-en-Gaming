import React from "react";
import Item from "./Item";


const ItemList = (item) => {
    console.log(item)
    return (
       <div className="row">
         {
           Item.map=(Item =>
               <div className="col" key={item.id} >
                   <Item item={item} />

               </div>
            
            )
         }     
         
         </div>
         )

}

export default ItemList