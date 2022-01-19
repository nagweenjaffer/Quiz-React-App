import React from "react";

const HighScore = () => {
  const val = JSON.parse(localStorage.getItem("high"));

  return (
    <div>
      {val?.map((e) => (
        <div>
          {e.name}
          {e.score}
        </div>
      ))}
    </div>
  );
};

export default HighScore;
