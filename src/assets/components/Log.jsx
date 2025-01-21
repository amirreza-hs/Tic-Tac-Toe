import React from "react";

export default function Log({ logGameTurns }) {
  return (
    <ol id="log">
      {logGameTurns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
