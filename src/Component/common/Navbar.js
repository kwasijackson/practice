import React from 'react'
import {Link,Outlet} from 'react-router-dom';
import '../Pages/Admin.css'


const Navbar = ({message}) => {
  return (
    <div className='admin-contain'>
      
            <div className='items'>      
            <Link to="/admin/add">Add Questions</Link> 
            <Link to="/admin/show">Show Questions</Link>
            <Link to="/admin/create">Create Quiz</Link>
            </div>
            
            <div>
       <h2>{message}</h2> 
       <hr/>
       </div>
     
            <Outlet></Outlet>

          
      

            
    </div>
  )
}

export default Navbar
