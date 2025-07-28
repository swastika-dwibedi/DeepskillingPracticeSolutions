import React from "react";

export default function ListOfPlayers({ players }) {
  return (
    <div>
      {players.map((item, index) => (
        <li key={index}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
      ))}
    </div>
  );
}
