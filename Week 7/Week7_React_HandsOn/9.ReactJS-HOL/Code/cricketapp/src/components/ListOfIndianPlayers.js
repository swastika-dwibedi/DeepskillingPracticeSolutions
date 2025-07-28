import React from "react";

export default function ListOfIndianPlayers({ IndianPlayers }) {
  return (
    <div>
      {IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </div>
  );
}
