import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import NoPageFound from './Pages/NoPageFound'
import ProductDetails, { Description, Reviews } from './Pages/ProductDetails'
// import Loading from './Components/Loading'

// const Header = lazy(() => import("./Components/Header"))
// const Footer = lazy(() => import("./Components/Footer"))
// const Home = lazy(() => import("./Pages/Home"))
// const Shop = lazy(() => import("./Pages/Shop"))
// const Cart = lazy(() => import("./Pages/Cart"))
// const NoPageFound = lazy(() => import("./Pages/NoPageFound"))


const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='product-details/:id' element={<ProductDetails />}>
            <Route path="description" element={<Description />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App