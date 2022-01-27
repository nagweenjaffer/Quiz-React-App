import "./App.css";
import Header from "./Components/Header/Header";
import StartCard from "./Components/StartCard/StartCard";
import { useState } from "react";
import QuizCard from "./Components/QuizCard/QuizCard";
import FinishedCard from "./Components/FinsihedCard/FinishedCard";
import HighScore from "./Components/HighScores/HighScore";

function App() {
  const [counter, setCounter] = useState(10);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("start");
  const [timeEnd, setTimeEnd] = useState(false);

  return (
    <div className="App">
      <Header counter={counter} />
      <div className="appContainer">
        {gameState === "start" && (
          <StartCard setGameState={setGameState} setCounter={setCounter} />
        )}
        {gameState === "quiz" && (
          <QuizCard
            setGameState={setGameState}
            score={score}
            setScore={setScore}
            counter={counter}
            setCounter={setCounter}
            timeEnd={timeEnd}
            setTimeEnd={setTimeEnd}
          />
        )}
        {gameState === "finished" && (
          <FinishedCard
            score={score}
            timeEnd={timeEnd}
            setGameState={setGameState}
          />
        )}
        {gameState === "highScores" && (
          <HighScore setGameState={setGameState} />
        )}
      </div>
    </div>
  );
}

export default App;
