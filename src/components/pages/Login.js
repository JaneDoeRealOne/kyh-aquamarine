import React from 'react';
import '../Login.css';
import DarkLogo from '../assets/KYH-dark-logo.png';
// import { Button } from '../Button';
// import '../../App.css';

export default function Login() {
  return (
    <>
      <section className='login'>
        <div className='login--container'>
          <div className='logo--container'>
            <img src={DarkLogo} className='form--logo' alt='logotype' />
          </div>
          <h1 className='form--h1'>Logga in</h1>
          <p>Email</p>
          <input type='email' label='email' placeholder='Ange din email'></input>
          <p>Lösenord</p>
          <input type='password' label='password' placeholder='Ange ditt lösenord'></input>
          {/* <Button className='btn--outline'>Logga in</Button> */}
          <button className='form--btn'>Logga in</button>
          <a href='/' className='form--link'>Glömt lösenord?</a>
        </div>
      </section>
    </>
  )
}
