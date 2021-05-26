import {useQuiz} from '../../QuizContext/QuizContext'
import { Result } from '../../QuizContext/QuizContext';
import './Scoreboard.css'
import {ReviewAnswer} from '../ReviewAnswer/ReviewAnswer'

export const Scoreboard=()=>{
    const { quizState } = useQuiz();

    const getRightAnswers = (resultArray: Result[]): number => {
        const rightAnswers = resultArray.filter(
            (result) => result.correctOption === result.selectedOption,  
        );
        console.log(rightAnswers.length);
        return rightAnswers.length;  
    };

    return quizState.currentQuiz && (
        <>
        <div className="scoreboard_card">
            <h3>{quizState.currentQuiz.topic} Quiz</h3>
            <p>Good Job 👏✨</p>
            <p style={{color:"red"}}>Your score is : {quizState.score}</p>
            <p style={{color:"green"}}>No of right anwers : {getRightAnswers(quizState.result.resultArray)}</p>
        </div>
        <ReviewAnswer/>
        </>
    ) 
}