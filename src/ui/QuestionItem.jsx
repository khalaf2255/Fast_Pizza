import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSeelectedOption, getCorrect, getInCorrect, getQuestionStatus } from '../userSlice';

export default function QuestionItem({ question, submit }) {


    const { id, options, question: questionText } = question
    const dispatch = useDispatch()
    let ss = question.options.map(xx => xx.isCorrect === true).filter(item => item === true).length
    const questions = useSelector(store => store.user.questions)
    const corr = questions.map(q =>q.options.map(opt => opt.isCorrect && opt.text).filter(item => item  ))
    console.log(corr);
    function handelSelectedOption(questionId, optionId, option) {
        dispatch(getSeelectedOption({ questionId, optionId }));
        dispatch(getQuestionStatus({ questionId }));

        if (option.isCorrect) {
            dispatch(getCorrect({ questionId }))
        } else {
            dispatch(getInCorrect({ questionId }))
        }
    }

    return (
        <div style={{background: 'gainsboro', padding: '6px 20px 70px 20px', margin: '1rem 0'}}>
            <h2> {id}- { questionText}</h2>
            <div className='opts'>


                {options.map(opt =>
                    <label
                        className={`${opt.selected && ss === 1 ? 'selected' : ''}
                        ${submit && opt.selected && !opt.isCorrect ? 'wrong' : ''}
                        ${submit && opt.selected && opt.isCorrect ? 'correct' : ''} `} 
                        onClick={() => handelSelectedOption(question.id, opt.id, opt)} key={Math.random()}>
                        <input
                            checked={opt.selected }
                            type={ss === 1 ? 'radio' : 'checkbox'} name={ss === 1 ? question.id : opt.name}
                            onChange={() => handelSelectedOption(question.id, opt.id)} />
                        {opt.text}

                        { submit && opt.selected && !opt.isCorrect && <p className='corr'> The correct answer is: <b>{ corr[id - 1] + ' '}</b></p>}
                    </label>
                )
            }
            </div>

        </div>
    )
}
