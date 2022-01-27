import React from "react";
import { questions } from "../../Questions/Questions";
import { useState } from "react";
import quizStyle from "./style.module.css";
import { useEffect } from "react";

const QuizCard = ({
  score,
  setScore,
  setGameState,
  counter,
  setCounter,
  setTimeEnd,
}) => {
  const [currenetQuestion, setcurrenetQuestion] = useState(0);

  const handleClick = (option) => {
    const nextQuestion = currenetQuestion + 1;
    if (nextQuestion < questions.length) {
      setcurrenetQuestion(nextQuestion);
      if (option === questions[currenetQuestion].answer) {
        setScore(score + 1);
      }
    } else {
      //in case it's the last question it will enter the condition and direct to finish card
      if (option === questions[currenetQuestion].answer) {
        setScore(score + 1);
      }
      setGameState("finished");
    }
  };

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    console.log(typeof timer);
    if (timer == 0) {
      setTimeEnd(true);
      setGameState("finished");
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <h3>{questions[currenetQuestion].questionText}</h3>
      {questions[currenetQuestion].options.map((option, i) => (
        <div className={quizStyle.answersSection} key={i}>
          <button onClick={() => handleClick(option)} className={quizStyle.answer_btn}>{option}</button>
        </div>
      ))}
    </div>
  );
};

export default QuizCard;
