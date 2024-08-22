import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
const Menu = ({category,setCategory}) => {
  return (
    <div className='menu'id='menu'>
        <h1>Explore Our Menu</h1>
        <p className='menu-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis placeat in, quasi error doloribus odit voluptatum consequatur reprehenderit commodi sunt consequuntur vel vero officia optio quisquam nihil beatae atque. Aliquam.</p>
        <div className="menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="menu_image" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Menu
