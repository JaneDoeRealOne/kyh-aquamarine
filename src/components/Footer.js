import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <ul className='kyh-brand'>KYH
          <li className='phone-number' type='number'>076- 885 21 20</li>
          <li className='email' type='email'>antagning@kyh.se</li>
        </ul>
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
        <ul className='contact'>Kontakt
          <Link className='policy'>Integritetspolicy</Link>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
