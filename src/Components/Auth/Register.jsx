import React from 'react';
import RegisterImg from '../../assests/register.svg';

const Register = ({ onRegisterLogin }) => {
  return (
    <div className='main-container --flex-center'>

      <div className="form-container">
        <form action="" className="--form-control">
          <h2 className='--color-danger --text-center'>Register</h2>
          <input type="text" placeholder='Username' className='--width-100' />
          <input type="email" placeholder='Email' className='--width-100' />
          <input type="password" placeholder='Password' className='--width-100' />
          <button className="--btn --btn-primary --btn-block">Register</button>
          <p className="--text-sm.--block">Do you Have account ..? < a href='#' onClick={onRegisterLogin}><span className='--text-sm'>Login</span> </a></p>
        </form>

      </div>
      <div className="img-container">
        <img src={RegisterImg} alt="" />
      </div>
    </div>
  )
}

export default Register