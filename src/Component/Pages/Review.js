import {Link, useLocation} from "react-router-dom";
import Question from '../Question';
import {useState} from 'react'


const Review = () => {
  const location = useLocation();
  const {quizquestions,answers} = location.state;
  const [currQues, setCurrQues]=useState(0);
  const [options, setOptions]=useState();
  

  return <>
  <h1 className='align-center'>Review</h1>
      {
          quizquestions.map((question,index) => {
            
             
              return <div className='card'>
                  
                  <Question question={question} selectedOption={answers[question.id]} currQues ={index} options={[question.optionA, question.optionB,question.optionC,question.optionD]}  />
              </div>
              
          })
      }
      <section className='align-center'>
          <Link  className='btn btn-primary' to='/quiz' state={{quizquestions, answers}}>Make Changes</Link>
          <Link className='btn btn-success' to='/results'  state={{quizquestions, answers}}>Submit</Link>
      </section>
  </>
}

export default Review
