import React, { useState } from 'react'
import "./Home.css"
import Header from '../../Header/Header'
import Menu from '../../Menu/Menu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
const Home = () => {
    const [category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
