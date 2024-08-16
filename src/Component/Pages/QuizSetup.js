import React , {useState, useEffect, useContext} from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import { QuizContext } from '../../contexts/QuizContext';
const QuizSetup = () => {
    const takequizUrl="http://localhost:8080/Quiz/allQuiz";
    const [quiz, setQuiz]=useState([]);
    const navigation = useNavigate();
    
    const {quizquestions, setQuizquestions, quizId, setQuizId}=useContext(QuizContext);



    useEffect(()=> {
        axios.get(takequizUrl).then(result=>{setQuiz(result.data);
    }).catch(error=>{console.log(error)});
    
       },[] );

       const Allquiz=quiz.map(q=>         
        <option value={q.id} key={q.id}>
         {q.title}
         </option>
                 );
                
                
    const Changehandler = (e) => { 
                    const Id = e.target.value;
                    setQuizId(Id);
                 quiz &&   axios.get("http://localhost:8080/Quiz/get/" + Id).then(result=>{setQuizquestions(result.data);
                }).catch(error=>{console.log(error)});
            }
  
            const handleSubmit = ()=>{
                navigation("/quiz" ,{state: {quizquestions: quizquestions} });

            }
  return (
    <div className='align-center'>
      <h1 className='align-center'>Welcome to the Online Test Application</h1>
        <div>
      
        <label>Select a quiz</label>
        <select name="quiz" className="" required onChange={Changehandler}>
		<option value="">--Select Quiz--</option> 
		{Allquiz}
	</select>
        </div>
        <div>
            <button  onClick={handleSubmit}>start Quiz</button>
        </div>
    </div>
  )
}

export default QuizSetup
