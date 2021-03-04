import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import './Google.css';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '789316294123-ejn8p31dqs842mvjfju1su9n0hubsbsq.apps.googleusercontent.com';

function LoginGoogleHooks() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button-google">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default LoginGoogleHooks;
