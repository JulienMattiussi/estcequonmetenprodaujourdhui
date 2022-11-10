import React from "react";
import { Helmet } from "react-helmet";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Holidays from "date-holidays";
import logoYes from "./yes.png";
import logoNo from "./no.jpg";
import logoOSEF from "./osef.gif";
import "./App.css";

const FRIDAY = "5";
const SATURDAY = "6";
const SUNDAY = "7";

function App() {
  const date = new Date();
  const dayNumber = format(date, "i", { locale: fr });
  const day = format(date, "eeee", { locale: fr });

  const hd = new Holidays("FR");

  const isFriday = dayNumber === FRIDAY;
  const isWeekEnd = dayNumber === SATURDAY || dayNumber === SUNDAY;
  const isHoliday = hd.isHoliday(new Date());
  const nextDayIsHoliday = hd.isHoliday(
    new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
  );

  const siteUrl = "https://estcequonmetenprodaujourdhui.vercel.app";
  const title = "Est-ce qu'on met un site en production aujourdhui ?";
  const text = `Un ${day} ?${
    isWeekEnd || isFriday || isHoliday || nextDayIsHoliday
      ? `${
          isHoliday
            ? " Un jour férié ?"
            : nextDayIsHoliday
            ? " Juste avant un jour férié ?"
            : ""
        }???!`
      : ""
  }`;
  const image =
    isWeekEnd || isHoliday
      ? logoNo
      : isFriday || nextDayIsHoliday
      ? logoOSEF
      : logoYes;
  const author = "@YavaDeus";

  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={text} />
        <meta name="author" content={author} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://estcequonmetenprodaujourdhui.vercel.app"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={text} />
        <meta property="og:image" content={`${siteUrl}${image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteUrl}${image}`} />
        <meta name="twitter:creator" content={author} />
        <link rel="preload" href={`${siteUrl}${image}`} as="image" />
      </Helmet>
      <header className="App-header">
        <h1>{text}</h1>
        <img src={image} alt={isWeekEnd ? "Non" : isFriday ? "OSEF" : "Oui"} />
      </header>
    </div>
  );
}

export default App;
