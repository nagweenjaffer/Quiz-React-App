import React from "react";
import { questions } from "../../Questions/Questions";
import { useState } from "react";
import quizStyle from "./style.module.css";

const QuizCard = ({ score, setScore, setisQuiz, setisFinished }) => {
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
      setisQuiz(false);
      setisFinished(true);
    }
  };

  return (
    <div>
      <h3>{questions[currenetQuestion].questionText}</h3>
      {questions[currenetQuestion].options.map((option, i) => (
        <div className={quizStyle.answersSection} key={i}>
          <button onClick={() => handleClick(option)}>{option}</button>
        </div>
      ))}
    </div>
  );
};

export default QuizCard;
