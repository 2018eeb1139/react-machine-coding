import { useState } from "react";

const games = ["hockey", "cricket", "football"];
const days = ["weekdays", "weekends"];

export default function Game() {
  const [game, setGame] = useState("");
  const [day, setDay] = useState("");
  return (
    <div className="">
      <h1>Which Game ?</h1>
      {games.map((g, index) => (
        <div className="" key={index}>
          <input
            type="radio"
            name="sports"
            id={g}
            value={g}
            onChange={(e) => setGame(e.target.value)}
          />
          <label htmlFor="">{g}</label>
        </div>
      ))}
      <h1>Select Days</h1>
      {days.map((d, index) => (
        <div className="" key={index}>
          <input
            type="radio"
            name="din"
            id={d}
            value={d}
            onChange={(e) => setDay(e.target.value)}
          />
          <label htmlFor="">{d}</label>
        </div>
      ))}
      {game && day && (
        <h1>
          You will play {game} on {day}
        </h1>
      )}
    </div>
  );
}
