import { useQuiz } from '../../QuizContext/QuizContext';
import './ReviewAnswer.css'
import {
	styleRightAndWrongAnswers,
	isOptionSelected,
	isRightAnswer,
} from '../../utils/utils';

export const ReviewAnswer = () => {

 
	const {
		quizState: { result, currentQuiz },
	} = useQuiz();



	return (
		<div className='review_sec'>
			<div style={{marginBottom:"20px"}}><h3>Review Answers</h3></div>
			
				{currentQuiz?.questions.map((quiz, index) => {
					return (
						<div
                        
							key={index}>
							<div className='review_ques'>
								{index + 1}. {quiz.question}
							</div>
							<div className='btn_section'>
								{quiz.options.map((option) => {
									return (
										<div
											className={`option_btn  ${
												styleRightAndWrongAnswers(
													result.resultArray,
													option.id,
													quiz.id,
												)
													&& styleRightAndWrongAnswers(
															result.resultArray,
															option.id,
															quiz.id,
													  )
													
											}`}>
											{isOptionSelected(
												result.resultArray,
												option.id,
												quiz.id,
											) ? (
												isRightAnswer(
													result.resultArray,
													option.id,
													quiz.id,
												) ? (
													<div >
														<span>{option.text}</span>
														
													</div>
												) : (
													<div>
														<span>{option.text}</span>
														
													</div>
												)
											) : (
												option.text
											)}
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			
		</div>
	);
};