import "./App.css";
import Header from "./Components/Header/Header";
import StartCard from "./Components/StartCard/StartCard";
import { useState } from "react";
import QuizCard from "./Components/QuizCard/QuizCard";
import FinishedCard from "./Components/FinsihedCard/FinishedCard";

function App() {
  const [isStart, setisStart] = useState(true);
  const [counter, setCounter] = useState(30);
  const [isQuiz, setisQuiz] = useState(false);
  const [isFinished, setisFinished] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Header counter={counter} />
      <div className="appContainer">
        {isStart && <StartCard setisStart={setisStart} setisQuiz={setisQuiz} />}
        {isQuiz && (
          <QuizCard
            setisQuiz={setisQuiz}
            setisFinished={setisFinished}
            score={score}
            setScore={setScore}
            counter={counter}
            setCounter ={setCounter}
          />
        )}
        {isFinished && <FinishedCard score={score} />}
      </div>
    </div>
  );
}

export default App;
