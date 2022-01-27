import React, { useRef } from "react";
import { useEffect } from "react";

const FinishedCard = ({ score, timeEnd, setGameState }) => {
  const initial = useRef("");

  const handleSubmit = (init) => {
    const obj = { name: init.current.value, score: score };
    const val = JSON.parse(localStorage.getItem("high"));
    val.push(obj);

    localStorage.setItem("high", JSON.stringify(val));
    initial.current.value = "";
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
      <p>Enter Your Name </p>
      <input type="text" ref={initial} />
      <div>
        <button
          type="submit"
          onClick={() => {
            handleSubmit(initial);
            setGameState("highScores");
          }}
          className="btn"
          style={{ marginTop: 10 }}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default FinishedCard;
