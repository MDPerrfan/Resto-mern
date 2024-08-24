import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assests } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    const {getTotalCartAmount}=useContext(StoreContext)
    return (
        <div className='navbar'>
            <Link to='/'><img className='logo' src={assests.navlogo} alt="Navlogo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>Mobile-app</a>
                <a href='#contact-us' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assests.search} alt="search" style={{ minWidth: "28px", maxWidth: "37px" }} />
                <div className="navbar-basket">
                    <Link to='/cart'>
                        <img src={assests.basket} alt="basket" style={{ minWidth: "30px", maxWidth: "38px" }} />
                    </Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar
