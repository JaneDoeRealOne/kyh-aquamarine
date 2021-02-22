import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonstyle,
  buttonsize
}) => {
  const checkButtonStyle = STYLES.includes(buttonstyle)
    ? buttonstyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0];

  return (
    <Link to='/login' className='btn-mobile'>
      <button className='btn-mobile'
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};