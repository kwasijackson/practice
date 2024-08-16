import {useState} from 'react';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import LoginSignup from './Component/Loginsignup/LoginSignup';
import ShowQuestions from './Component/Pages/ShowQuestions';
import AddQuesion from './Component/Pages/AddQuesion';
import CreateQuiz from './Component/Pages/CreateQuiz';
import QuizSetup from './Component/Pages/QuizSetup';
import { QuizContext } from './contexts/QuizContext';
import Quiz from './Component/Pages/Quiz';
import Review from './Component/Pages/Review';
import Result from './Component/Pages/Result';
import Quizzerpage from './Component/Pages/Quizzerpage';
import Admin from './Component/Pages/Admin';
import EditQuestion from './Component/Pages/EditQuestion';



function App() {
 const [screen, setScreen]=useState("setup");
 const [quizquestions, setQuizquestions]=useState([]);
 const [quizId, setQuizId]=useState(0);

 console.log(screen);
  return(
<div>

<QuizContext.Provider value={{quizquestions,setQuizquestions,quizId, setQuizId }}>
<Router>
        <Routes>
            <Route path='/quiz' Component={Quiz} />
            <Route path='/review' Component={Review} />
            <Route path='/results' Component={Result} />
             <Route path='/' Component={LoginSignup} />
             <Route path="edit-question/:id" element={<EditQuestion/>}></Route>
             <Route path='/admin' Component={Admin} >
                   <Route path="/admin/add" element={<AddQuesion/>}></Route>
                   <Route path="/admin/show" element={<ShowQuestions/>}></Route>
                   <Route path="/admin/create" element={<CreateQuiz/>}></Route>
                  
                  
             </Route>

             <Route path='/quizzerpage' Component={Quizzerpage} >
                  <Route path='quiz' Component={Quiz} />
                  <Route path='review' Component={Review} />
                  <Route path='results' Component={Result} />
                  <Route path='quizsetup' Component={QuizSetup} />
             </Route>
        </Routes>
</Router>
      
  
  
 </QuizContext.Provider>
</div>
  );
}
export default App;

