import { useEffect } from "react";
import { useParams } from "react-router";
import { useQuiz } from "../../QuizContext/QuizContext";
import { CurrentQuestion } from "./CurrentQuestion/CurrentQuiz";

export const Quiz = () => {
  const { quizState, quizDispatch } = useQuiz();
  const { quizId }:any = useParams();
  // console.log({ quizState });

  const pStyle:any = {
    margin: "100px auto",
    textAlign: "center",
    fontSize: "xx-large"
  }

  useEffect(() => {
    const findCurrentQuiz = quizState.quiz.find((quiz) => {
      return quiz.id === quizId;
    });
    quizDispatch({ type: "LOAD_CURRENT_QUIZ", payload: findCurrentQuiz });
  }, [quizDispatch,quizId,quizState.quiz]);

  return (
    <div>
      {quizState.currentQuiz &&
      quizState.currentQuiz.questions[quizState.currentQuestionNumber] ? (
        <CurrentQuestion currentQuiz={quizState.currentQuiz} />
      ) : (
        <p style={pStyle}>Your quiz has ended</p>
      )}
    </div>
  );
};
