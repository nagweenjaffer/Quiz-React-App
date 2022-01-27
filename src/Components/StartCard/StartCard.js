import React from "react";
import cardStyle from "./style.module.css";
import { useEffect } from "react";

const StartCard = ({ setGameState, setCounter }) => {
  useEffect(() => {
    setCounter(10);
  }, []);
  return (
    <div className={cardStyle.container}>
      <h1>Coding Quiz Challenge</h1>
      <h5>
        Try to answer the the following code-related questions within the time
        limit.
      </h5>
      <h5>
        Keep in mind that incorrect answers will penalize your score/time by ten
        seconds
      </h5>
      <button
        className="btn"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartCard;
