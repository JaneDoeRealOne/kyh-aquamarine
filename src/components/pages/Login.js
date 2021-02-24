import React, { useRef } from 'react';
import '../Login.css';
import DarkLogo from '../assets/KYH-dark-logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()


  return (
    <>
      <section className='login'>
        <div className='login--container'>
          <div className='logo--container'>
            <img src={DarkLogo} className='form--logo' alt='logotype' />
          </div>
          <h1 className='form--h1'>Logga in</h1>
          <p>Email</p>
          {/* <div className='input--wrapper'> */}
          {/* <i className="far fa-envelope icon"></i> */}
          <input type='email' ref={emailRef} placeholder='Ange din email' required></input>
          {/* </div> */}
          <p>Lösenord</p>
          <input type='password' ref={passwordRef} placeholder='Ange ditt lösenord' required></input>
          <button type='submit' className='form--btn'>Logga in</button>
          <a href='/' className='form--link'>Glömt lösenord?</a>
        </div>
      </section>
    </>
  )
}
