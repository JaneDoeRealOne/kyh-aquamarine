import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>VÄLKOMMEN!</h1>
      <p>Du har blivit antagen till en utbildning på KYH</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          KOM IGÅNG
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SPELA FILMEN <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;