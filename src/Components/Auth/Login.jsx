import React from 'react';
import loginImg from '../../assests/login.svg';
import { Link } from 'react-router-dom';

const Login = ({ onRegister, onReset }) => {
    return (
        <div className='main-container --flex-center'>
            <div className="img-container">
                <img src={loginImg} alt="" />
            </div>
            <div className="form-container">
                <form action="" className="--form-control">
                    <h2 className='--color-danger --text-center'>Login</h2>
                    <input type="text" placeholder='Username' className='--width-100' />
                    <input type="password" placeholder='Password' className='--width-100' />
                    <button className="--btn --btn-primary --btn-block">Login</button>
                    <a href='#' onClick={onReset}>
                        <p className='--text-sm'>Forgot Password</p>
                    </a>
                    <p className="--text-sm.--block">Don't Have account ..?
                        < a href='#' onClick={onRegister}>
                            <span className='--text-sm'>Register</span>
                        </a>
                    </p>
                </form>

            </div>
        </div>
    )
}

export default Login