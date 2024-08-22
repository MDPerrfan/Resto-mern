import React, { useState } from 'react'
import "./Navbar.css"
import { assests } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]=useState("home")
    return (
        <div className='navbar'>
            <img className='logo' src={assests.navlogo} alt="Navlogo" />
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
                <a href='#menu' onClick={()=>setMenu("menu")}  className={menu==="menu"?"active":""}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("about")}  className={menu==="about"?"active":""}>Mobile-app</a>
                <a href='#contact-us' onClick={()=>setMenu("contact-us")}  className={menu==="contact-us"?"active":""}>Contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assests.search} alt="search" style={{minWidth:"28px",maxWidth:"37px"}} />
                <div className="navbar-basket">
                    <img src={assests.basket} alt="basket" style={{minWidth:"30px",maxWidth:"38px"}}/>
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign in</button>
            </div>    
        </div>
    )
}

export default Navbar
