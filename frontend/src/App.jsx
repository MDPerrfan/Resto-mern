import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
/* import Placeorder from './components/pages/PlaceOrder/PlaceOrder'
 */import Cart from './components/pages/Cart/Cart'
import Home from './components/pages/Home/Home'
import Footer from './components/Footer/Footer'
import Login from './components/LoginPopUp/Login'
const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
     {/*  <Route path='/order' element={<Placeorder/>}/> */}
    </Routes>      
  </div>
  <Footer/></>
    
  )
}

export default App
