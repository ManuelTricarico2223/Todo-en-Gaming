import React from "react";
import CartWidget from "./CartWidget";
import Productos from "./Productos";

    const NavBar = () => {
         return (
    <div>
        <div className="container">
      <div className="row">
       <div className="col-md-12">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={"img/logoGaming.PNG"} alt="todo en gaming" width={130}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/inicio">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/productos">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contacto">Contacto</a>
                </li>
                </ul>
                <div className="col-md-6 d-flex justify-content-end align-items-center" >
                   <CartWidget/>
                </div>
            </div>
          </div>
        </nav>
       </div>
      </div>
     </div>
  </div>  
  
     );


}

export default NavBar;