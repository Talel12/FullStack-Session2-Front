import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';
import InstagramLogo from '../../Assets/icons/Instagram_logo.svg.png'
import "./auth.css"

const Auth = () => {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div className='auth-container'>
            <div className='auth-form-box'>
                <img id='auth-logo' src={InstagramLogo} alt="" />
                <div className='auth-form'>
                    {showLogin ? <Login /> : <Register />}
                </div>
            </div>
            <div className='auth-switch'>
                <p>{showLogin ? 'Don\'t have an account?' : 'Already have an account?'}</p>
                <span onClick={() => setShowLogin(!showLogin)}>{showLogin ? ' Sign Up' : ' Login'}</span>
            </div>
            <div className='auth-apps'></div>
        </div>
    )
}

export default Auth