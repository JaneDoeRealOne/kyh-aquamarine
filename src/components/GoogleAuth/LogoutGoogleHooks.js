import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import './Google.css';

const clientId =
  '789316294123-ejn8p31dqs842mvjfju1su9n0hubsbsq.apps.googleusercontent.com';

function LogoutGoogleHooks() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    //alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button-google">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutGoogleHooks;
