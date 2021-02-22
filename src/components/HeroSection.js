import React from 'react';
// import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import ReactPlayer from "react-player";

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Välkommen!</h1>
      <p>Du har blivit antagen till en utbildning på yrkeshögskolan KYH</p>
      <div className='hero-btns'>
        {/* <Link to='/login'> */}
        <Button
          className='btns'
          buttonstyle='btn--outline'
          buttonsize='btn--large'
        >
          KOM IGÅNG
        </Button>
        <a href='https://www.youtube.com/embed/euiGHk8dIPI' target="_blank" rel="noopener noreferrer" >
          <button
            className='btns movie--btn'
            buttonstyle='btn--primary'
            buttonsize='btn--large'
            onClick={console.log('hey')}
          >
            SE VIDEO <i className='far fa-play-circle' />
          </button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;