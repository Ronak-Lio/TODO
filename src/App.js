import React  from 'react';
import './App.css';
import Login from './Login';
import { useSelector} from "react-redux";
import { selectUser } from './features/user/userSlice';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Todo from './Todo';


function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Router>
       <Switch>
         <Route to = '/todo'>
          {user? <Todo/>: <Login />}
         </Route>
         <Route to = '/'>
           <Login/>
         </Route>
       </Switch>  
      </Router>      
    </div>
  );
}

export default App;
