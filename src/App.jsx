import React from 'react'
import {Helmet} from "react-helmet";
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

  const text = `Un ${day} ?${isWeekEnd || isFriday ? '???!' : ''}`;
  const image = isWeekEnd ? logoNo : isFriday ? logoOSEF : logoYes;

  return (
    <div className="App">
    <Helmet>
        <title>Est-ce qu'on met un site en production aujourdhui ?</title>
        <meta
            name="description"
            content={text}
        />
        <link rel="preload" href={image} as="image" />
    </Helmet>
      <header className="App-header">
        <h1>{text}</h1>
        <img src={image} alt={isWeekEnd ? "Non" : isFriday ? "OSEF" : "Oui"} />
      </header>
    </div>
  )
}

export default App
