import React from 'react'
import ResetImg from '../../assests/forgot.svg';
import {AiOutlineClose} from 'react-icons/ai';

const Reset = ({onLogin}) => {
  return (
    <div className='main-container --flex-center'>
      
      <div className="form-container reset">
        <form action="" className="--form-control">
          <h2 className='--color-danger --text-center'>Reset</h2>
          <input type="email" placeholder='Email' className='--width-100' />
          <button className="--btn --btn-primary --btn-block">Reset Password</button>
          <p className="--text-sm.--block">We will send you reset link !!! </p>
          <div className="close" onClick={onLogin}>
            <AiOutlineClose color='red'/>
          </div>
        </form>

      </div>
      <div className="img-container">
        <img src={ResetImg} alt="" />
      </div>
    </div>
  )
}

export default Reset