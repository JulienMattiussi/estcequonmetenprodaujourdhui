import React from 'react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import logoYes from './yes.png'
import logoNo from './no.jpg'
import logoOSEF from './osef.gif'
import './App.css'

const FRIDAY = '5';
const SATURDAY = '6';
const SUNDAY = '7';

function App() {

  const date = new Date();
  const dayNumber = format(date, 'i', {locale: fr});
  const day = format(date, 'eeee', {locale: fr});

  const isFriday = dayNumber === FRIDAY;
  const isWeekEnd = dayNumber === SATURDAY || dayNumber === SUNDAY;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Un {day} ?{isWeekEnd || isFriday ? '???!' : ''}</h1>
        <img src={isWeekEnd ? logoNo : isFriday ? logoOSEF : logoYes} alt={isWeekEnd ? "Non" : isFriday ? "OSEF" : "Oui"} />
      </header>
    </div>
  )
}

export default App
