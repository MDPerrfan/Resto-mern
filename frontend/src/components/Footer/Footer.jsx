import React from 'react'
import './Footer.css'
import { assests } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="left">
                    <img src={assests.navlogo} alt="logo" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, cupiditate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, possimus?</p>
                    <div className="social-icons">
                        <img src={assests.fb} alt="fb" />
                        <img src={assests.insta} alt="insta" />
                        <img src={assests.linkedin} alt="linkedin" />
                    </div>
                </div>
                <div className="center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+8304823083</li>
                        <li>resto@mail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="copyright">
                Copyright@2024 Parves
            </p>
        </div>
    )
}

export default Footer
