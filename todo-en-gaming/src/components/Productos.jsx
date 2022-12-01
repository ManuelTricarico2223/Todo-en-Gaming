import React from "react";

const Productos = () => {
    return ( 
        <div className="Accesorios">
        <div className="colum">
          <div className="card">
             <div className="gigabyte">
                <img src="img\gigabyte pc.jpg" alt="Gigabyte" width={250}/>
             <h5 className="card-title">Notebook Gaming</h5>
             <p className="card-text">Notebook Gamer Rtx 3060 144hz I5 16gb 512gb Gigabyte G5 Bk</p>
             <p className="precio1">U$S 2.268</p>
             <a href="" className="btn btn-primary">Comprar</a>
             </div>
          </div>
          <div className="card">
             <div className="card-body">
                <img src="img\lenovo2.jpg" alt="Lenovo" width={250}/>
                <h5 className="card-title">Notebook Gaming</h5>
                <p className="card-text">Notebook Dell 13.3 I5-11320h 512ssd 16ram Ultima Generacion</p>
                <p className="precio2">U$S 899</p>
                <a href="#" className="btn btn-primary">Compar</a>
             </div>
        </div>
        </div>
     </div>
       
    )

}

export default Productos;