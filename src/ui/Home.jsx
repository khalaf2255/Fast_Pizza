import { useSelector } from 'react-redux';
import QuestionItem from './QuestionItem';
import { useState } from 'react';


function Home() {
  const [submit, setSubmit] = useState(false)
  let allQuestions = useSelector(store => store.user.questions)
  let score = allQuestions.map(q => q.score).reduce((a, b) => a + b, 0)
  let tr = allQuestions.map(xx => xx.status === true).filter(item => item === true).length;



  function onsubmit() {
    setSubmit(prev => !prev)
  }
  const questions = useSelector(data => data.user.questions)
  return (
    <div className="my-10 px-4 text-center sm:my-16" >
      <div className={`${submit && 'pointerEvents '}`}>

        {questions.map(question => <QuestionItem submit={submit} question={question} key={question.id} />)}
        <button className={`${tr !== questions.length ? 'disabled' : ''}`} onClick={onsubmit}>send</button>
        {submit && <center><h2> Your result: {Math.floor(score * 100 / allQuestions?.length) + '%'}</h2></center>}
      </div>
    </div>
  );
}

export default Home;
