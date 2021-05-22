import { useState } from "react";
// import { useNavigate } from "react-router";
import { useQuiz } from "../../../QuizContext/QuizContext";
import { Quiz } from "../../../QuizDB/QuizDB";
import './CurrentQuiz.css'

type Prop = {
  currentQuiz: Quiz;
};

export const CurrentQuestion = ({ currentQuiz }: Prop) => {
  // const navigate = useNavigate();
  const { quizState, quizDispatch } = useQuiz();
  const [disableButtons, setDisableButtons] = useState<boolean>(false);
  const [optionId, setOptionId] = useState<string>("");
  const nextQuestion = () => {
    if (currentQuiz) {
      quizState.currentQuestionNumber === currentQuiz.questions.length - 1
        ? quizDispatch({ type: "INCREMENT_QUESTION_NUMBER", payload: -1 })
        : quizDispatch({ type: "INCREMENT_QUESTION_NUMBER" });
    }
    setDisableButtons(false);
    if (!optionId) {
      quizDispatch({
        type: "UPDATE_RESULT",
        payload: {
          id: currentQuiz.questions[quizState.currentQuestionNumber].id,
          hasTaken: false,
          selectedOption: "",
          correctOption: currentQuiz.questions[
            quizState.currentQuestionNumber
          ].options.find((option) => option.isRight)?.id
        }
      });
    }
    setOptionId("");
  };
  const isRightAnswer = (isRight: boolean, selectedOption: string) => {
    if (isRight) {
      quizDispatch({
        type: "UPDATE_SCORE",
        payload: {
          points: currentQuiz?.questions[quizState.currentQuestionNumber].points
        }
      });
    } else {
      quizDispatch({
        type: "UPDATE_SCORE",
        payload: {
          points:
            currentQuiz?.questions[quizState.currentQuestionNumber]
              .negativePoints
        }
      });
    }
    setOptionId(selectedOption);
    setDisableButtons((disableButtons) => !disableButtons);
    quizDispatch({
      type: "UPDATE_RESULT",
      payload: {
        id: currentQuiz.questions[quizState.currentQuestionNumber].id,
        hasTaken: true,
        selectedOption: selectedOption,
        correctOption: currentQuiz.questions[
          quizState.currentQuestionNumber
        ].options.find((option) => option.isRight)?.id
      }
    });
    
  };

  const styleRightAndWrongAnswers = (
    isRight: boolean,
    selectedButtonId: string
  ): string => {
    if (isRight && selectedButtonId === optionId) {
      return "right_option";
    }
    if (!isRight && selectedButtonId === optionId) {
      return "wrong_option";
    }
    return "";
  };

  const viewScore = () => {
    // navigate(`/quiz/${currentQuiz.id}/scoreboard`, { replace: true });
    if (!optionId) {
      quizDispatch({
        type: "UPDATE_RESULT",
        payload: {
          id: currentQuiz.questions[quizState.currentQuestionNumber].id,
          hasTaken: false,
          selectedOption: "",
          correctOption: currentQuiz.questions[
            quizState.currentQuestionNumber
          ].options.find((option) => option.isRight)?.id
        }
      });
    }
  };
  return (
    <div className="question_sec">
      <div className="">
        <div className="card_quiz_topic">{`${currentQuiz.topic} quiz`}</div>
        <div className="score_card">
          <div>
            <span style={{fontSize:"xx-large"}}>
              {quizState.currentQuestionNumber + 1}
            </span>
            <span className="">/{currentQuiz.questions.length}</span>
          </div>
          <div>
            <span className="score">SCORE  </span>
            <span style={{fontSize:"xx-large"}}> {quizState.score}</span>
          </div>
        </div>
        <div className="">
          <div className="question">
            {currentQuiz.questions[quizState.currentQuestionNumber].question}
          </div>
          <div className="btn_section">
            {currentQuiz.questions[quizState.currentQuestionNumber].options.map(
              (option) => {
                return (
                  <button
                    className={`option_btn  ${
                      styleRightAndWrongAnswers(option.isRight, option.id)
                        && styleRightAndWrongAnswers(option.isRight, option.id)
                        
                    }`}
                    key={option.id}
                    onClick={() => isRightAnswer(option.isRight, option.id)}
                    disabled={disableButtons}
                  >
                    {option.text}
                  </button>
                );
              }
            )}
          </div>
        </div>
        {quizState.currentQuestionNumber ===
        currentQuiz.questions.length - 1 ? (
          <button
            className="next_btn"
            onClick={viewScore}
          >
            View Score
          </button>
        ) : (
          <button
            className="next_btn"
            onClick={nextQuestion}
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};
