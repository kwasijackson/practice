import {Link,Outlet} from 'react-router-dom';

const Quizzerpage = () => {
  return (
    <div>
<h2>Welcome to Quiz Home Page</h2>
            <Link to="quizsetup">Take Quiz</Link> |
                                    
            <hr/>
            <Outlet></Outlet>

               </div>
  )
}

export default Quizzerpage
