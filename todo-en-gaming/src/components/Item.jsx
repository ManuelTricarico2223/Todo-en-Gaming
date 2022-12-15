import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {setItems} from "react"

const Productos = () => {
   const [items, setItems] = useState([]);


  useEffect(() => {
    const arrayProductos = [
      {id:1, nombre:"Notebook-Gigabyte", precio:2268, imagen: "http://t0.gstatic.com/images?q=tbn:ANd9GcRYPW7Jc4pgLKac4SS4JU8UCN8OQ4t3lsR6yK5aZDFVimNU69tv", stock:5, categoria:"Notebook"},
      {id:2, nombre:"Notebook-Lenovo", precio:899, imagen: "https://f.fcdn.app/imgs/6bbce1/www.compupel.com.uy/coeluy/5477/original/catalogo/101214810121481/1920-1200/notebook-lenovo-ideapad-3i-17itl06-core-i5-11-gen-ram-8gb-disco-solido-256gb-pantalla-17-3-full-hd-win11-notebook-lenovo-ideapad-3i-17itl06-core-i5-11-gen-ram-8gb-disco-solido-256gb-pantalla-17-3-full-hd-win11.jpg",stock:5, categoria:"Notebook"},
      {id:3, nombre:"Notebook-Hp", precio:949, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_620925-MLU51056467368_082022-F.webp", stock:5, categoria:"Notebook"},
      {id:4, nombre:"Tablet-A7", precio:200, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_656192-MLA47146625520_082021-F.webp",stock:5, categoria:"Tablet"},
      {id:5, nombre:"tablet-A8", precio:299, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_767050-MLA52219760768_102022-F.webp",stock:5, categoria:"Tablet"},
      {id:6, nombre:"Tablet-Xiaomi", precio:449, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_690210-MLA48062564734_102021-F.webp",stock:5, categoria:"Tablet"},
      {id:7, nombre:"monitor-gigabyte", precio:350, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_690576-MLA48690913393_122021-F.webp",stock:5, categoria:"Monitor"},
      {id:8, nombre:"Monitor-LG", precio:350, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_750988-MLA46623210609_072021-F.webp", stock:5, categoria:"Monitor"},
      {id:9, nombre:"Monitor-Samsung", precio:400, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_960902-MLA46796375628_072021-F.webp", stock:5, categoria:"Monitor"}
   
   ];
})
   const promesa = new Promise((resolve) => {
         setTimeout(() =>{
         resolve(arrayProductos);
      },2000)
   })

promesa.then((data => {
   setItems(data);
})
,[]);
     

     const  Item = (item) => {
            return (
    
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="card" id="1" nombre="Notebook-Gigabyte">
             <div className="gigabyte">
                <img src="/img/gigabyte pc.png" alt="Notebook-Gigabyte" width={300}/>
             <h5 className="card-title">Notebook Gaming</h5>
             <p className="card-text">Notebook Gamer Rtx 3060 144hz I5 16gb 512gb Gigabyte G5 Bk</p>
             <p className="precio1">U$S 2268</p>
             <a href="#" className="btn btn-primary">Comprar</a>
             </div>
          </div>
          <div className="card" id="2" nombre="Notebook-Lenovo">
             <div className="lenovo">
             <img src="img\lenovo2.jpg" alt="Lenovo" width={300}/>
             <h5 className="card-title">Notebook Gaming</h5>
                <p className="card-text">Notebook Dell 13.3 I5-11320h 512ssd 16ram Ultima Generacion</p>
                <p className="precio2">U$S 899</p>
             <a href="#" className="btn btn-primary">Comprar</a>
             </div>
          </div>
          <div className="card" id="3" nombre="Notebook-Hp">
             <div className="gigabyte">
                <img src="img\Notebook HP.png" alt="HP" width={350}/>
             <h5 className="card-title">Notebook Gaming HP</h5>
             <p className="card-text">Notebook Hp Gamer Ryzen 7 5700u 16gb 512ssd Vega8 Gti Ofic</p>
             <p className="precio1">U$S 949</p>
             <a href="#" className="btn btn-primary">Comprar</a>
             </div>
          </div>
          <div className="card" id="4" nombre="Tablet-A7">
             <div className="tabletA7">
                <img src="img\Tablet Tab7.png" alt="tablet-a7" width={150}/>
             <h5 className="card-title">Tablet A7</h5>
             <p className="card-text">Tablet Samsung Galaxy Tab A7 Lite SM-T220 8.7" 32GB gris 3GB de memoria RAM</p>
             <p className="precio1">U$S 200</p>
             <a href="#" className="btn btn-primary">Comprar</a>
             </div>
          </div>
          <div className="card" id="5" nombre="tablet-A8">
             <div className="tabletA7">
                <img src="img\Tablet Tab A8.png" alt="tablet-a8" width={350}/>
             <h5 className="card-title">Tablet A8</h5>
             <p className="card-text">Tablet Samsung Galaxy Tab A A8 SM-X200 10.5" 32GB dark gray 3GB de memoria RAM</p>
             <p className="precio1">U$S 299</p>
             <a href="#" className="btn btn-primary">Comprar</a>
             </div>
          </div>
          <div className="card" id="6" nombre="Tablet-Xiaomi">
             <div className="tabletXiaomi">
                <img src="img\Tablet Xiaomi.png" alt="Xiaomi" width={250}/>
             <h5 className="card-title">Tablet Xiaomi</h5>
             <p className="card-text">Tablet Xiaomi Pad 5 11" 128GB cosmic gray 6GB de memoria RAM</p>
             <p className="precio1">U$S 449</p>
             <a href={item.id} className="btn btn-primary">Comprar</a>
             </div>
          </div>
          <div className="card" id="7" nombre="Monitor-Gigabyte">
             <div className="monitor-gigabyte">
                <img src="img\Monitor Gigabyte.PNG" alt=" monitor-gigabyte" width={300}/>
                <h5 className="card-title">Monitor Gaming</h5>
                <p className="card-text">Monitor gamer curvo Gigabyte G27FC led 27" negro 100V/240V</p>
                <p className="precio2">U$S 350</p>
                <a href="#" className="btn btn-primary">Compar</a>
             </div>
        </div>
        <div className="card" id="8" nombre="Monitor-LG">
             <div className="Lg">
                <img src="img\Monitor LG.png" alt="Lg" width={350}/>
                <h5 className="card-title">Monitor Gaming Gigabyte</h5>
                <p className="card-text">Monitor gamer curvo Gigabyte G27FC led 27" negro 100V/240V</p>
                <p className="precio2">U$S 350</p>
                <a href="#" className="btn btn-primary">Compar</a>
             </div>
        </div>
        <div className="card" id="9" nombre="Monitor-Samsung">
             <div className="Samsung">
                <img src="img\monitorSamsung.PNG" alt="Samsung" width={300}/>
                <h5 className="card-title">Monitor Gaming Samsung</h5>
                <p className="card-text">Monitor gamer curvo Samsung Odyssey G5 C27G55T led 27" negro 100V/240V</p>
                <p className="precio2">U$S 400</p>
                <a href="#" className="btn btn-primary">Compar</a>
             </div>
        </div>
        </div>
      )
    }


   }

export default Productos;