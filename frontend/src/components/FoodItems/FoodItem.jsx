import React, { useContext } from 'react'
import "./FoodItem.css"
import { assests } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {
    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-img' src={url+"/files/"+image} alt="food" />
            {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assests.addicon}/>
            :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assests.remove_icon} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assests.addicon_green} alt="" />
            </div>}
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assests.rating_stars} alt="stars" />
            </div>
           <p className="food-item-desc">
            {description}
           </p>
           <p className="food-item-price">
            ${price}
           </p>
        </div>
    </div>
  )
}

export default FoodItem
