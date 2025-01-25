import React, { useState } from "react";

export default function PlayerInfo({
  initialName,
  symbol,
  isActive,
  onSaveName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onSaveName(symbol, playerName);
    }
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let playerNameBox = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameBox = (
      <input type="text" value={playerName} required onInput={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerNameBox}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
