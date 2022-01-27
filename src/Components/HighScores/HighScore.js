import React from "react";
import ScoreStyle from "./style.module.css";

const HighScore = ({ setGameState }) => {
  const val = JSON.parse(localStorage.getItem("high"));

  return (
    <div>
      <h1>High Scores</h1>
      {val?.map((e, i) => (
        <div className={ScoreStyle.highscore_container} key={i}>
          <div className={ScoreStyle.data}>{e.name} </div>
          <div className={ScoreStyle.data}>{e.score}</div>
        </div>
      ))}
      <button
        className="btn"
        onClick={() => {
          setGameState("start");
        }}
      >
        Retake Quiz
      </button>
    </div>
  );
};

export default HighScore;
