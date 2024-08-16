import React , {useState, useEffect}from 'react'
//import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Search from '../common/Search';

const ShowQuestions = () => {
const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState("");
  
  const [currentpage, setCurrentpage] = useState(1);
  const pagesize = 10;


  function deleteRow(id, e) {
    axios.delete(`http://localhost:8080/Questions/delete/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);

        const question1 = questions.filter(item => item.Id !== id);
        setQuestions(question1);
      });
  }

 

  useEffect(() => {
    axios.get("http://localhost:8080/Questions/allQuestions").then(result => {
        setQuestions(result.data);
    }).catch(error => { console.log(error) });

  }, []);

  const question = questions.filter((st) =>
  st.questionTitle
    .toLowerCase()
    .includes(search)
).map((q,index)=>
       <tr key={q.id}>
        <td>{index +1}</td>
        <td>{q.category}</td>
        <td>{q.questionTitle}</td>
        <td>{q.optionA}</td>
        <td>{q.optionB}</td>
        <td>{q.optionC}</td>
        <td>{q.optionD}</td>
        <td>{q.correctAnswer}</td>
        <td>{q.diffcultylevel}</td>
        
        <td>
          
          <button className="btn btn-primary nav-item active" >

            <Link to={`/edit-question/${q.id}`} className='btn btn-primary'>Edit
            </Link>
          </button>
         </td>
         <td>
          <button className="btn btn-danger" onClick={(e) => deleteRow(q.id, e)}>Delete</button>
        </td>
        </tr>
        
      );
      console.log(question)

  return (
    <div>
        <h3 style={{color:'white'}}>Questions Inventory</h3>
        <Search search={search} setSearch={setSearch} />
        <table className="table table-hover table-responsive-xl">
        <thead className="thead-light">
          <tr>
            <th>Id</th>
            <th>category</th>
            <th>Question</th>
            <th>optionA</th>
            <th>optionB</th>
            <th>optionC</th>
            <th>optionD</th>
            <th>correctAnswer</th>
            <th>Diffcultylevel</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>{question}</tbody>
        
      </table>
      
    </div>
  )
}

export default ShowQuestions
