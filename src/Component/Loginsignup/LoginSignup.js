
import React , {useState} from 'react'
import './loginSignup.css'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
const LoginSignup = () => {
  const navigate =useNavigate();
    const [action, setAction]=useState("Login")
    const  [emailid,setEmailiId]=useState("");
    const  [password,setPassword]=useState("");
    const  [typeofuser,setTypeOfUser]=useState("");
    const [name, setName]=useState("");
    const [isloggedin,setIsLoggedin]=useState("false");

    let signIn=async (event)=> {
      event.preventDefault();
      let login = {"emailid":emailid,"password":password,"typeofuser":typeofuser,"name":name};
      try{
      let result = await axios.post("http://localhost:8080/login/signIn",login);
      
      setAction("Login");
      //console.log(result.data);
      if(result.data==="Admin Success"){
          navigate("/admin");
          setIsLoggedin(true);
          Swal.fire("Admin loggged in successfully", result.data,"success")
          
      }else if(result.data==="Customer success"){
          navigate("/quizzerpage");
          setIsLoggedin(true);
          Swal.fire("Quizzer loggged in successfully", result.data,"success")
         
      }else {
          alert(result.data);
          Swal.fire("Please Check your usename or password", result.data,"failure");
      }
      }catch(ex){
          console.log(ex);
         
          Swal.fire("Please Check your usename or password", ex.data,"success");
      }
  }
  

  return (
    <div className='container'>
        <div className='header'>
         <div className='text'>
            {action}       
         </div>
         <div className='underline'></div>

        </div>
      <div className='inputs'>
      {action==="Login"? <div></div>:<div className='input'>
            <img src='' alt='' />
            <input type='text' placeholder='Name' name="name" onChange={e=>setName(e.target.value)}/>
        </div>} 
      
        <div className='input'>
            <img src='' alt='' />
            <input type='email' placeholder='email Id' name="emailid" onChange={e=>setEmailiId(e.target.value)}/>
        </div>
        <div className='input'>
            <img src='' alt='' />
            <input type='password' placeholder='password' name="password" onChange={e=>setPassword(e.target.value)} />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Pasword? <span>Click Here</span></div>}
      
      <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={signIn}>Login</div>
      </div>

    </div>
  )
}

export default LoginSignup
