import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import app from '../../firebase';
import { AuthContext } from '../../Auth';
import '../Login.css';
import DarkLogo from '../assets/KYH-dark-logo.png';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/home');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/home' />;
  }


  return (
    <section className='login'>
      <form className='login--container' onSubmit={handleLogin}>
        <div className='logo--container'>
          <img src={DarkLogo} className='form--logo' alt='logotype' />
        </div>
        <h1 className='form--h1'>Logga in</h1>
        <label>Email</label>
        <input name='email' type='email' placeholder='Ange din email' required></input>
        <label>Lösenord</label>
        <input name='password' type='password' placeholder='Ange ditt lösenord' required></input>
        <button type='submit' className='form--btn'>Logga in</button>
        <a href='/' className='form--link'>Glömt lösenord?</a>
      </form>
    </section>
  );
};

export default withRouter(Login);