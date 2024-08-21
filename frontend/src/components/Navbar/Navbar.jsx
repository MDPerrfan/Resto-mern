import React, { useState } from 'react'
import "./Navbar.css"
import { assests } from '../../assets/assets'
const Navbar = () => {
    const[menu,setMenu]=useState("home")
    return (
        <div className='navbar'>
            <img src={assests.navlogo} alt="Navlogo" />
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
                <li onClick={()=>setMenu("menu")}  className={menu==="menu"?"active":""}>Menu</li>
                <li onClick={()=>setMenu("about")}  className={menu==="about"?"active":""}>About</li>
                <li onClick={()=>setMenu("contact-us")}  className={menu==="contact-us"?"active":""}>Contact us</li>
            </ul>
            <div className="navbar-right">
                <img src={assests.search} alt="search" style={{width:"38px"}} />
                <div className="navbar-basket">
                    <img src={assests.basket} alt="basket" style={{width:"40px"}}/>
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>    
        </div>
    )
}

export default Navbar
