import React from 'react';
import '../../App.css';
import FaqList from '../FAQ/FaqList';

export default function Faq() {
  return (
    <div className='faq-wrapper'>
      <h1 className='faq'>FAQ</h1>
      <FaqList />
    </div>
  )
};
