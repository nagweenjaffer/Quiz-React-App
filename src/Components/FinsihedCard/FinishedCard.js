import React, { useRef } from "react";
import { useEffect } from "react";

const FinishedCard = ({ score, timeEnd, setGameState }) => {
  const initial = useRef("");

  const handleSubmit = (init) => {
    const obj = { name: init.current.value, score: score };
    const val = JSON.parse(localStorage.getItem("high"));
    val.push(obj);

    localStorage.setItem("high", JSON.stringify(val));
  };

  useEffect(() => {
    if (localStorage.getItem("high") === null) {
      localStorage.setItem("high", JSON.stringify([]));
    }
  }, []);

  return (
    <div>
      {timeEnd ? <h2>oh the time finished !!!</h2> : <h2>All Done !</h2>}
      <p> Your final score is {score}.</p>
      <p>
        Enter initials <input type="text" ref={initial} />
        <button
          type="submit"
          onClick={() => {
            handleSubmit(initial);
          }}
        >
          Enter
        </button>
        <button onClick={() => setGameState("highScores")}>HighScore</button>
      </p>
    </div>
  );
};

export default FinishedCard;
