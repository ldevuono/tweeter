// import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'


function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
