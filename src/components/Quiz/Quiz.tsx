import { useEffect } from "react";
import { useParams } from "react-router";
import { useQuiz } from "../../QuizContext/QuizContext";
import { CurrentQuestion } from "./CurrentQuiz";

export const Quiz = () => {
  const { quizState, quizDispatch } = useQuiz();
  const { quizId }:any = useParams();
  // console.log({ quizState });

  useEffect(() => {
    const findCurrentQuiz = quizState.quiz.find((quiz) => {
      return quiz.id === quizId;
    });
    quizDispatch({ type: "LOAD_CURRENT_QUIZ", payload: findCurrentQuiz });
  }, []);

  return (
    <div>
      {quizState.currentQuiz &&
      quizState.currentQuiz.questions[quizState.currentQuestionNumber] ? (
        <CurrentQuestion currentQuiz={quizState.currentQuiz} />
      ) : (
        <p>Your quiz has ended</p>
      )}
    </div>
  );
};
