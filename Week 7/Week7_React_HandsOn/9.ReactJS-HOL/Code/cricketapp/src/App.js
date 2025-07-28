// App.js
import React from "react";
import ListOfPlayers from "./components/ListOfPlayers";
import ScoreBelow70 from "./components/ScoreBelow70";
import OddPlayers from "./components/OddPlayers";
import EvenPlayers from "./components/EvenPlayers";
import ListOfIndianPlayers from "./components/ListOfIndianPlayers";

// Sample data
const players = [
  { name: "Jack", score: 50 },
  { name: "Michael", score: 70 },
  { name: "John", score: 40 },
  { name: "Ann", score: 61 },
  { name: "Elisabeth", score: 61 },
  { name: "Sachin", score: 95 },
  { name: "Dhoni", score: 100 },
  { name: "Virat", score: 84 },
  { name: "Jadeja", score: 64 },
  { name: "Raina", score: 75 },
  { name: "Rohit", score: 80 },
];

// Indian player arrays
const T20Players = ["First Player", "Second Player", "Third Player"];
const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];
const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

// Destructuring input
const IndianTeam = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvaraj5", "Raina6"];

// Toggle flag
const flag = false;

function App() {
  return (
    <div>
      {flag ? (
        <>
          <h1>List of Players</h1>
          <ListOfPlayers players={players} />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <ScoreBelow70 players={players} />
        </>
      ) : (
        <>
          <h1>Odd Players</h1>
          <OddPlayers players={IndianTeam} />
          <hr/>
          <h1>Even Players</h1>
          <EvenPlayers players={IndianTeam} />
          <hr />
          <h1>List of Indian Players Merged:</h1>
          <ListOfIndianPlayers IndianPlayers={IndianPlayers} />
        </>
      )}
    </div>
  );
}

export default App;
