import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../Loginsignup/loginSignup.css'
import Swal from 'sweetalert2';

const CreateQuiz = () => {
    const [category,setCategory]=useState("") ;
    const [numQ, setNumQ]= useState(1);
    const [quizTitle, setQuizTitle]=useState("");
    const quizUrl="http://localhost:8080/Quiz/create";

    const createQuiz= async(event)=> {
        event.preventDefault();
        
    let newurl= quizUrl+ "?category=" + category;
    console.log(newurl);
   let result = await axios.post(quizUrl+"?category=" + category + "&quizTitle=" + quizTitle + "&numQ=" + numQ);
   
   if(result.data==="Successful"){
    Swal.fire("Quiz Created successfuly", result.data,"success")
    setCategory("");
    setNumQ(1);
    setQuizTitle("");
    
   }


    }
  return (
    <div className='container'>
        <div className='header'>
         <div className='text'>
            Create Quiz       
         </div>
         <div className='underline'></div>
        </div>
        <form onSubmit={createQuiz} method='Post'>
            <div className='inputs'>
                <div className='input'>
                  <label>QuizTitle:</label>
                  <input type='text' value={quizTitle} required placeholder='Quiz Title' onChange={e=>setQuizTitle(e.target.value)}  />
                </div>
                <div className='input'>
                  <label>NoOfQuestions:</label>
                  <input type='number' value={numQ} min={1} max={100} required placeholder='Number of Questions to quiz' onChange={e=>setNumQ(e.target.value)}  />
                </div>
                <div className='input'>
                  <label>Category:</label>
                  <input type='text' value={category} required placeholder='Quiz Question Category' onChange={e=>setCategory(e.target.value)}  />
                </div>
            </div>
            <div className='submit-container'>
            <div className='submit' > <input type="submit" value="Save Quiz" className='submit' /> </div>
            
         </div>

        </form>
      
    </div>
  )
}

export default CreateQuiz
