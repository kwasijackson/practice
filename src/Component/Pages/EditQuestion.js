import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../common/Navbar';
import {
	Link,
	useNavigate,
    useParams
} from "react-router-dom";

const EditQuestion = () => {
                        
    const [category, setCategory]=useState("");
    const [questionTitle, SetQuestionTitle]=useState("");
    const [optionA , SetOptionA]=useState("");
    const [optionB , SetOptionB]=useState("");
    const [optionC , SetOptionC]=useState("");
    const [optionD , SetOptionD]=useState("");
    const [correctAnswer , SetCorrectAnswer]=useState("");
    const [diffcultylevel , SetDiffcultylevel]=useState("");
    const QuestionUrl="http://localhost:8080/Questions/addQuestion";
    let navigate = useNavigate();
    const { id } = useParams();



 useEffect(()=>{
    loadQuestion();
 },[]);

    const loadQuestion = async ()=>{
    const result = await axios.get(`http://localhost:8080/Questions/${id}`);
    SetQuestionTitle(result.data.questionTitle);
    SetOptionA(result.data.optionA);
    SetOptionB(result.data.optionB);
    SetOptionC(result.data.optionC);
    SetOptionD(result.data.optionD);
    SetCorrectAnswer(result.data.correctAnswer);
    setCategory(result.data.category);
    SetDiffcultylevel(result.data.diffcultylevel);

        
    }

    const addQuestion= async(event)=> {
        event.preventDefault();
        let addQuestion= {"id":id,"category":category,"questionTitle":questionTitle,"optionA":optionA,"optionB":optionB,"optionC":optionC, "optionD":optionD,"correctAnswer":correctAnswer,"diffcultylevel":diffcultylevel};
   let result = await axios.post(QuestionUrl,addQuestion);

   if(result.data==="Successful"){
    SetQuestionTitle("");
    SetOptionA("");
    SetOptionB("");
    SetOptionC("");
    SetOptionD("");
    SetCorrectAnswer("");

    navigate("/admin/show");                       

   }
    }

    
  return (
    <div className='container'>
        <div className='header'>
            <Navbar message={"Edit Question page"} />
         <div className='text'>
            Edit Question {id}      
         </div>
         <div className='underline'></div>
        </div>
        <form onSubmit={addQuestion} method='Post'>
         <div className='inputs'>
            <div className='input'>
            <label>Question:</label>
            <input type='text' value={questionTitle} required placeholder='Question Title' onChange={e=>SetQuestionTitle(e.target.value)}  />
            </div>
            <div className='input'>
            <label>Category:</label>
            <input type='text' value={category} required placeholder='Category' onChange={e=>setCategory(e.target.value)}/>
            </div>
            <div className='input'>
            <label>OptionA:</label>
            <input type='text' value={optionA}required  placeholder='Option A' onChange={e=>SetOptionA(e.target.value)} />
            </div>
            <div className='input'>
            <label>OptionB:</label>
            <input type='text'value={optionB} required placeholder='Option B' onChange={e=>SetOptionB(e.target.value)} />
            </div>
            <div className='input'>
            <label>OptionC:</label>
            <input type='text' value={optionC} required placeholder='Option C' onChange={e=>SetOptionC(e.target.value)} />
            </div>
            <div className='input'>
            <label>OptionD:</label>
            <input type='text' value={optionD} required placeholder='Option D' onChange={e=>SetOptionD(e.target.value)} />
            </div>
            
            <div className='input'>
            <label>CorrectAnswer:</label>
            <input type='text' value={correctAnswer} required placeholder='Correct Answer' onChange={e=>SetCorrectAnswer(e.target.value)} />
            </div>
            <div className='input'>
            <label>Diffcultylevel:</label>
            <input type='text' value={diffcultylevel} required placeholder='Diffculty Level' onChange={e=>SetDiffcultylevel(e.target.value)} />
            </div>
         </div>
         <div className='submit-container'>
         <input type="submit" value="Save Question" className='submit' />
            
         </div>
        </form>

      
    </div>
  )
}


export default EditQuestion
