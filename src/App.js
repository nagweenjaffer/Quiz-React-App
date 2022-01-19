import "./App.css";
import Header from "./Components/Header/Header";
import StartCard from "./Components/StartCard/StartCard";
import { useState } from "react";
import QuizCard from "./Components/QuizCard/QuizCard";
import FinishedCard from "./Components/FinsihedCard/FinishedCard";

function App() {
  const [counter, setCounter] = useState(30);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("start");

  return (
    <div className="App">
      <Header counter={counter} />
      <div className="appContainer">
        {gameState === "start" && <StartCard setGameState={setGameState} />}
        {gameState === "quiz" && (
          <QuizCard
            setGameState={setGameState}
            score={score}
            setScore={setScore}
            counter={counter}
            setCounter={setCounter}
          />
        )}
        {gameState === "finished" && <FinishedCard score={score} />}
      </div>
    </div>
  );
}

export default App;
