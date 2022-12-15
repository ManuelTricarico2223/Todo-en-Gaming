import React from "react"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import ItemList from "./components/ItemList"
import Mapeo from "./components/Mapeo"
import Item from "./components/Item"

function App() {
  return (
    <div className="Container">
      <NavBar/>
      <ItemListContainer/>
      <Mapeo/>
      <Item/>
      <ItemList/>
      <Footer/>
   </div>
  )
}

export default App;