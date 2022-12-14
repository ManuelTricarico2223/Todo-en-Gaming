import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);
    
     const incrementarStock = () =>{
        if (counter < stock){
        setCounter(counter + 1);
    }
}
    const decrementarStock = () => {
        if (counter > 1){
        setCounter(counter - 1);
    } 
}
     const onAdd = () => {
        if (counter <= stock) {
            setStock(stock - counter);
            setCounter(1);
        console.log("Agregaste" + counter + " Productos al Carrito");
     }
     }
  return (
    <div className="container">
         <div className="row">
            <div className="col-md-3" >
              <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary bg-light"onClick={decrementarStock}>-</button>
                <button type="button" className="btn btn-outline-primary bg-light">{counter}</button>
                <button type="button" className="btn btn-outline-primary bg-light"onClick={incrementarStock}>+</button>
             </div>
          </div>
              <div className="row">
                <div className="col-md-2">
                   <button  className="btn btn-outline-primary bg-light" onClick={onAdd}>Agregar al Carrito</button>
                </div>


              </div>
     </div>
  </div>

  )


}

export default ItemCount;