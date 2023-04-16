import React, { useState } from 'react';
import Login from './Login';
import './authContainer.scss';
import Register from './Register';
import Reset from './Reset';


const AuthContainer = () => {

    // object in useState
    const [auth, setAuth] = useState({
        login: true,
        register: false,
        reset: false

    })

    const handleLogin = () => {
        setAuth({ login: true, register: false, reset: false })
    }

    const handleRegister = () => {
        setAuth({ register: true, login: false, reset: false })
    }

    const handleReset = () => {
        setAuth({ reset: true, login: false, register: false })
    }

    // with the help of useState
    // const [login, setLogin] = useState(true);
    // const [register, setRegister] = useState(false);
    // const [reset, setReset] = useState(false);

    // const handleRegister = () => {
    //     setRegister(true)
    //     setLogin(false)
    //     setReset(false)
    // };

    // const handleReset = () => {
    //     setReset(true)
    //     setLogin(false)
    //     setRegister(false)
    // }

    // const handleLogin = () => {
    //     setReset(false)
    //     setLogin(true)
    //     setRegister(false)
    // }

    return (
        <div>
            <section className='flex-center --100vh'>
                <div className="container box">
                    {auth.login && <Login onRegister={handleRegister} onReset={handleReset} />}
                    {auth.register && <Register onRegisterLogin={handleLogin} />}
                    {auth.reset && <Reset onLogin={handleLogin} />}
                </div>
            </section>
        </div>
    )
}

export default AuthContainer