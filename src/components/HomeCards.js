import React from 'react';
import Home from './Home';
import './HomeCards.css';

function HomeCards() {
  return (
    <div className='cards'>
      <h1>Senaste nytt på KYH</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Home
              src='images/produktionsledare.jpg'
              text='Är du intresserad av hur en vanlig dag ser ut för en produktionsledare?'
              label='Produktionsledare'
              path='/home'
            />
            <Home
              src='images/iot-dev.jpg'
              text='Har du stort intresse för uppkopplade smarta prylar? Missa då inte vår utbildning Internet Of Things'
              label='Internet of Things'
              path='/home'
            />
          </ul>
          <br />
          <h1>Användbar information</h1>
          <br />
          <ul className='cards__items'>
            <Home
              src='images/schoolsoft.jpg'
              text='Du kan kontrollera dina betyg genom att logga in på ditt Schoolsoft-konto.'
              label='Schoolsoft'
              path='/home'
            />
            <Home
              src='images/slack.png'
              text='Fråga undervisningen för dina klassen Slack Channels och gå med i dem.'
              label='Slack'
              path='/home'
            />
            <Home
              src='images/classroom.jpg'
              text='I Google Classroom hittar du allt studiematerial, nyheter, meddelanden och all annan information.'
              label='Classroom'
              path='/home'
            /> 
          </ul> 
          <ul className='cards__items'>
            <Home
              src='images/meets.jpg'
              text='Google Meets är den plats där du kommer att ha fjärrmöten.'
              label='Google Meet'
              path='/home'
            />
            <Home
              src='images/faq.png'
              text='Om du har några frågor, se vår FAQ-sida.'
              label='FAQ'
              path='/home'
            />
            <Home
              src='images/csn.png'
              text='Glöm inte att registrera dina poäng i tid till CSN.
               För andra frågor angående betalningar, kolla deras webbsida.'
              label='CSN'
              path='/home'
            /> 
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeCards;
