import React from 'react';
import '../../App.css';
import HomeCards from '../Home/HomeCards';
import LogoutGoogleHooks from'../GoogleAuth/LogoutGoogleHooks';

export default function Home() {
  return (
    <>
      <LogoutGoogleHooks/>
      <br />
      <HomeCards />
    </>
  )
}
