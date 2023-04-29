import React, { useEffect, useState } from 'react';
import RegisterImg from '../../assests/register.svg';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import { FaCheck } from 'react-icons/fa'

const Register = ({ onRegisterLogin, showPassword, handleToggle }) => {
  
  const [showIndicator, setShowIndicator] = useState(false);
  //password validation states
  const [pass, setPass] = useState("");
  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [passComplete, setPassComplete] = useState(false);

 

  const handleShowIndicator = () => {
    setShowIndicator(true)

  }
  const handlePasswordchange = (e) => {
    setPass(e.target.value)
    console.log(pass.length)
    console.log(pass)
  }
  useEffect(() => {
    if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setPassLetter(true)
    } else {
      setPassLetter(false)
    }

    if (pass.match(/([0-9])/)) {
      setPassNumber(true)
    } else {
      setPassNumber(false)
    }

    if (pass.match(/([!,@,#,$,%,^,&,*,~,?,_,])/)) {
      setPassChar(true)
    } else {
      setPassChar(false)
    }

    if (pass.length >7) {
      setPassLength(true)
    } else {
      setPassLength(false)
    }

    if(passLetter && passNumber && passChar && passLength){
      setPassComplete(true)

    }else{
      setPassComplete(false)
    }
  }, [pass,passChar,passLength,passLetter,passNumber])
  return (
    <div className='main-container --flex-center'>
      <div className="form-container">

        <form action="" className="--form-control">
          <h2 className='--color-danger --text-center'>Register</h2>

          <input
            type="text"
            placeholder='Username'
            className='--width-100'
          />
          <input type="email"
            placeholder='Email'
            className='--width-100'
          />

          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className='--width-100'
              onFocus={handleShowIndicator}
              value={pass}
              onChange={handlePasswordchange}
            />
            <span className='icon'
              onClick={handleToggle}>
              {showPassword ?
                <AiOutlineEyeInvisible />
                : <AiOutlineEye />
              }
            </span>
          </div>
          <button className={passComplete ? "--btn --btn-primary --btn-block" : " --btn --btn-primary --btn-block btn-disabled"}
            disabled={!passComplete}
            onClick={()=> alert("pass")}
            >
            Register
          </button>

          <p className="--text-sm.--block">Do you Have account ..?
            < a href='#' onClick={onRegisterLogin}>
              <span className='--text-sm'>Login</span>
            </a>
          </p>
          {/* passowrd strength */}
          <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
            <ul className='--list-style-none --card --bg-grey --text-sm --p'>
              <p className='--text-sm'>Passowrd Strength Indicators</p>

              <li className={passLetter ? "pass-green" : "pass-red"}>
                <span className='--align-center'>
                  {passLetter ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Lowercase & Uppercase
                </span>
              </li>

              <li className={passNumber ? "pass-green" : "pass-red"}>
                <span className='--align-center'>
                  {passNumber ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Numbers (0-9)
                </span>
              </li>

              <li className={passChar ? "pass-green" : "pass-red"}>
                <span className='--align-center'>
                  {passChar ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Special Charecter (!@#$%^&*)
                </span>
              </li>

              <li className={passLength ? "pass-green" : "pass-red"}>
                <span className='--align-center'>
                  {passLength ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Atleaset 8 Charecters
                </span>
              </li>

            </ul>
          </div>
        </form>

      </div>
      <div className="img-container">
        <img src={RegisterImg} alt="" />
      </div>
    </div>
  )
}

export default Register