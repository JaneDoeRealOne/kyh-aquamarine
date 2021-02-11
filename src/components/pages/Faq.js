import React from 'react';
import '../../App.css';
import FaqList from '../FaqList';

export default function Faq() {
  return (
    <div className='faq-wrapper'>
      <h1 className='faq'>Frequently asked questions<br />FAQ</h1>
      <FaqList />
    </div>
  )
};
