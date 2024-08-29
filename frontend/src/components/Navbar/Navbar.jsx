import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assests } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }
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
                <img src={assests.search} alt="search" style={{ minWidth: "25px", maxWidth: "35px" }} />
                <div className="navbar-basket">
                    <Link to='/cart'>
                        <img src={assests.basket} alt="basket" style={{ minWidth: "33px", maxWidth: "38px" }} />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign in</button>
                ) : (
                    <div className='nav-profile'>
                        <img className='cursor' src={assests.profile} alt="profile" style={{ maxWidth: "38px", minWidth: "24px" }} />
                        <ul className="nav-profile-dropdown">
                            <li onClick={()=>navigate("/myorders")}><img src={assests.bag_icon} alt="bag" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logOut}><img src={assests.logout} alt="logut" /><p>Logout</p></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Navbar
