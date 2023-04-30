// import { useState } from 'react'
import './App.css'
import Items from './components/Items.jsx'
import logo from './assets/fontlogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function App() {

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </header>
      <h1>Wild Flour Bakery</h1>
      <Items />
    </>
  )
}

export default App
