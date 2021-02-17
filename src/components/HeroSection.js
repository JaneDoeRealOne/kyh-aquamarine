import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import ReactPlayer from "react-player";

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Välkommen till KYH Student Portal</h1>
      <div className='hero-btns'>
      <h3>Watch this video for more informations about our Frontend Developer course.</h3>
      <ReactPlayer
        url='https://www.youtube.com/embed/euiGHk8dIPI'
      />
      <br />

    </div>
       <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
        >
          KOM IGÅNG
        </Button>
      </div>
  );
}

export default HeroSection;