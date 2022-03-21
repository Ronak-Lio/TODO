import React , {useEffect} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './Login';
import { useSelector, useDispatch } from "react-redux";
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
