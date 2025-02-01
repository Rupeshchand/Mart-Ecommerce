import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App