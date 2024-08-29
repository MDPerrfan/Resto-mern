import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Order from './components/pages/Order/Order'
import Cart from './components/pages/Cart/Cart'
import Home from './components/pages/Home/Home'
import Footer from './components/Footer/Footer'
import Login from './components/LoginPopUp/Login'
import Verify from './components/pages/verify/Verify'
import MyOrders from './components/pages/MyOrders/MyOrders'
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
        </Routes>
      </div>
      <Footer /></>

  )
}

export default App
