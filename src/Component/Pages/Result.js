import React , {useState, useEffect, useContext} from 'react'
import { QuizContext } from '../../contexts/QuizContext';
import {Link, useLocation} from "react-router-dom";
import axios from 'axios';
const Result = () => {
  const location = useLocation();
  const {quizquestions, answers} = location.state;
  const { quizId, setQuizId}=useContext(QuizContext);
  const [responses,SetResponses ]=useState("");
  const resultURL="http://localhost:8080/Quiz/submit/" 
  const [score , setScore]=useState(0);
  
  const StartQuiz = () => {
    setQuizId(0)
    return <section className='align-center mt'>
        <Link className='btn btn-primary' to="/quizzerpage/quizsetup">Start New Quiz</Link>
    </section>;
}
  
  
  
  
  const aa = quizquestions.map(question => {
   const bb={"Id":question.id, "response":answers[question.id]};


return bb

   // SetResponses(...responses,{"Id":question.id, "response":answers[question.id]})
  })

//send to backend for result computation
  useEffect(()=> {
    axios.post(resultURL + quizId,aa).then(result=>{setScore(result.data);
}).catch(error=>{console.log(error)});

   },[] );


  return (
    <div>
    <h1 className='align-center'>Results</h1>
        <section className='align-center'>
            <h1>{(score * 100.0) / quizquestions.length}%</h1>
            <small>{score} correct out of {quizquestions.length}</small>
            <StartQuiz />
        </section>
    </div>
  )
}

export default Result
