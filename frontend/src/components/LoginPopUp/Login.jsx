import React, { useContext, useState } from 'react'
import "./Login.css"
import { assests } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
const Login = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext)
    const [currenstate, setCurrentstate] = useState("Login");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }))
    }
    const onLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if (currenstate === "Login") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl, data);
        console.log("API Response:", response.data); // Log the response for debugging
        if (response.data.success) {
            console.log("Token:", response.data.token); // Log the response for debugging
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        } else {
            alert(response.data.message);
        }
    }
    return (
        <div className='login'>
            <form onSubmit={onLogin} className='login-container' action="">
                <div className="login-title">
                    <h2>{currenstate}</h2>
                    <img onClick={() => setShowLogin(false)} src={assests.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currenstate === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />
                    }
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>{currenstate === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, accusantium.</p>
                </div>
                {currenstate === "Login" ? <p>Create a new account? <span onClick={() => setCurrentstate("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrentstate("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Login
