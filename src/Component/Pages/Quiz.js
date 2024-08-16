import React, {useState, useEffect, useContext} from 'react'
import { QuizContext } from '../../contexts/QuizContext';
import Question from '../Question';
import '../../Quiz.css'
import { useNavigate, Link , useLocation} from 'react-router-dom';

const Quiz = () => {
 // const {quizquestions, setQuizquestions}=useContext(QuizContext);
  const location = useLocation();
    const {quizquestions, answers: passedAnswers} = location.state;
  const [options, setOptions]=useState();
  const [currQues, setCurrQues]=useState(0);
  const [answers, setAnswers] = useState(passedAnswers || {});
  const Navigate =useNavigate();
  console.log(quizquestions);
  useEffect(() => {
    console.log(quizquestions)

    setOptions(quizquestions && handleShuffle([quizquestions[currQues].optionA, quizquestions[currQues].optionB, quizquestions[currQues].optionC,quizquestions[currQues].optionD])

    );
  },[currQues,quizquestions ]);

  const handleShuffle = (optionss) => {
    return optionss.sort(()=> Math.random() -0.5);
  }

  console.log(options);
  
  if(!quizquestions) {
    return <Navigate to='/' replace />
}

const onSelectAnswer = (question, answer) => {
  setAnswers(answers => {
      return {...answers, [question]: answer}
  })
}

console.log(answers);
console.log(currQues);

  return (
    <div className='quiz'>
      <span className='subtitle'>Welcome to My Quiz </span>
      { quizquestions? (
        <>
        <div className='quizinfo'>
          <span>Quiz</span>
          <span>Category</span>
        </div>
        <Question question={quizquestions[currQues]} onSelectAnswer={onSelectAnswer} currQues={currQues} options={options} selectedOption={answers[quizquestions[currQues].id]} />

        <section className='quiz-actions'>
            {currQues > 0 && <button className='btn' onClick={()=>setCurrQues(currQues -1)}>Prev Question</button>}
            {currQues < quizquestions.length -1 && <button className='btn' onClick={()=>setCurrQues(currQues +1 )}>Next Question</button>}
            {(Object.keys(answers).length === quizquestions.length) && <Link className='btn btn-success' to='/review' state={{quizquestions,answers}}>Reveiw</Link>}
        </section>
        </>
      ):(
        <>
        
        </>
      ) 

      }
      
      
    </div>
  )
}

export default Quiz
