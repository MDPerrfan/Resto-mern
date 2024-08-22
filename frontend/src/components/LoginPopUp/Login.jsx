import React, { useState } from 'react'
import "./Login.css"
import { assests } from '../../assets/assets'
const Login = ({ setShowLogin }) => {
    const [currenstate, setCurrentstate] = useState("Sign Up")
    return (
        <div className='login'>
            <form className='login-container' action="">
                <div className="login-title">
                    <h2>{currenstate}</h2>
                    <img onClick={() => setShowLogin(false)} src={assests.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currenstate === "Login" ? <></> : <input type="text" placeholder='Your name' required />
                    }
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currenstate === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, accusantium.</p>
                </div>
                {currenstate === "Login" ? <p>Create a new account? <span onClick={()=>setCurrentstate("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={()=>setCurrentstate("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Login
