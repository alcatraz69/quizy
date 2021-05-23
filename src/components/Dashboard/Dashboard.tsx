import {Link} from 'react-router-dom';
import { useQuiz } from "../../QuizContext/QuizContext";
import './Dashboard.css'
import coverpic1 from '../../Assets/coverpic1.png'

export const Dashboard = () => {
  const { quizState, quizDispatch } = useQuiz();
  const takeQuiz = (quizId: string): any => {
    quizDispatch({
      type: "UPDATE_QUIZID",
      payload: quizId
    });
    quizDispatch({
      type: "INITIALIZE_QUESTION_NUMBER_AND_SCORE"
    });
  };
  return (
    <div>
      <div className="cover_imageSec">
        <div className="cover_txt">
        <p className="cover_heading">YOU THINK YOU KNOW EM ALL?</p>
        <p>Take the quiz to test your knowledge </p>
        </div>
        <img className="cover_image" src={coverpic1} alt="banner_img"/>
      </div>
      <div className="quiz_box">
        {quizState.quiz.map((quiz) => {
          return (
            <div className="quiz_item">
              <div className="quiz_imgSec">
                <img className="quiz_img" src={quiz.image} alt={quiz.topic} />
              </div>
              <div className="quiz_descSec">
                <div className="quiz_topic">{quiz.topic}</div>
                <div className="quiz_desc">{quiz.description}</div>
                <div className="quiz_btnSec">
                  <Link to={`/quiz/${quiz.id}`} key={quiz.id}>
                    <button
                      className="quiz_btn"
                      id={quiz.id}
                      onClick={() => takeQuiz(quiz.id)}
                    >
                      TAKE QUIZ
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
