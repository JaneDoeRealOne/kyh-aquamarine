import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Footer.css';
import Logo from './assets/KYH-logo.png';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <div className='brand-section'>
          <img src={Logo} className='footer-logo' alt='logotype' />
          <p className='p-tag' name='number' type='number'>076- 885 21 20</p>
          <p className='p-tag' name='email' type='email'>antagning@kyh.se</p>
        </div>
        <div className='social-media-wrapper'>
          <Link className='social-media-icon twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
          >
            <i className='fab fa-twitter' />
          </Link>
          <Link className='social-media-icon facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
          >
            <i className='fab fa-facebook' />
          </Link>
          <Link className='social-media-icon instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
          >
            <i className='fab fa-instagram' />
          </Link>
          <Link className='social-media-icon linkedin'
            to='/'
            target='_blank'
            aria-label='Linkedin'
          >
            <i className='fab fa-linkedin' />
          </Link>
          <Link className='social-media-icon messenger'
            to='/'
            target='_blank'
            aria-label='Facebook-Messenger'
          >
            <i className='fab fa-facebook-messenger' />
          </Link>
        </div>
        <div className='contact-section'>
          <p className='contact-text'>Kontakt</p>
          <Link className='policy'>Integritetspolicy</Link>
          <span className='copy-text'>&copy; KYH 2021</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
