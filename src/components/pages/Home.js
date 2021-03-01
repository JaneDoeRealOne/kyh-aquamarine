import React from 'react';
import '../../App.css';
import app from '../../firebase';
import { Redirect } from 'react-router-dom';
import HomeCards from '../Home/HomeCards';

export default function Home() {
  return (
    <>
      <button onClick={() => app.auth().signOut()}>LOGGA UT
      </button>
      <HomeCards />
    </>
  )
}
