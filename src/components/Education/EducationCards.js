//Cards.js
import React from 'react';
import Education from './Education';
import './EducationCards.css';

function EducationCards() {
  return (
    <div className='cards'>
      <h1>Dessa utbildningar finns hos oss på KYH</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Education
              src='images/produktionsledare.jpg'
              text='Är du intresserad av hur en vanlig dag ser ut för en produktionsledare?'
              label='Produktionsledare'
              path='/education'
            />
            <Education
              src='images/iot-dev.jpg'
              text='Har du stort intresse för uppkopplade smarta prylar? Missa då inte vår utbildning Internet Of Things'
              label='Internet of Things'
              path='/education'
            />
          </ul>
          {/* <ul className='cards__items'>
            <Education
              src='images/iot-dev.jpg'
              text='Har du stort intresse för uppkopplade smarta prylar? Missa då inte vår utbildning Internet Of Things'
              label='Internet of Things'
              path='/education'
            />
            <Education
              src='images/produktionsledare.jpg'
              text='Är du intresserad av hur en vanlig dag ser ut för en produktionsledare?'
              label='Produktionsledare'
              path='/education'
            />
            <Education
              src='images/iot-dev.jpg'
              text='Har du stort intresse för uppkopplade smarta prylar? Missa då inte vår utbildning Internet Of Things'
              label='Internet of Things'
              path='/education'
            />
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default EducationCards;
