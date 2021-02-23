import React from 'react';
// import '../../App.css';
import '../Login.css';
// import { Button } from '../Button';

export default function Login() {
  return (
    <>
      <section className='login'>
        {/* <h1 className='form--heading'>Vänligen fyll i dina inloggningsuppgifter</h1> */}
        <div className='login--container'>
          <h1 className='form--h1'>Logga in</h1>
          <p>Email</p>
          <input type='email' label='email' placeholder='Ange din email'></input>
          <p>Lösenord</p>
          <input type='password' label='password' placeholder='Ange ditt lösenord'></input>
          {/* <Button className='btn--outline'>Logga in</Button> */}
          <button className='form--btn'>Logga in</button>
          <p className='form--link'>Glömt lösenord?</p>
        </div>
      </section>
    </>
  )
}
