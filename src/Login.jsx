import React , {useState} from 'react'
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import { login } from './features/user/userSlice';
import {useHistory} from 'react-router-dom'

function Login() {
  const[name , setName] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  


  return (
    <Container>
    <div className="login">
        <p>TODO App</p>
        <input type="text" placeholder = "Enter your name" 
         value = {name}
         onChange = {(e) => setName(e.target.value)}
        />
        <button onClick = {() => {
            if(name.trim !== ''){
                dispatch(login(name));
                history.push('/todo')
            }
        }}>Login</button>
    </div>
    </Container>
  )
};


const Container = styled.div`
height : 100vh;
width : 100vw;
background : linear-gradient(to right , #59f9b7 , #66feea);
display: flex;
justify-content : center;
align-items : center;


.login{
  background-color : white;
  padding : 10px;
  border-radius : 10px;
  width : 400px;

  @media(max-width: 500px){
  width : 90vw;
}

  p{
      text-align : center;
      font-weight : 500;

  }

  input{
    width : 90%;
    border : 1px solid lightgray;
    padding : 10px;
    border-radius : 5px;
    color : #5a5a5a;
    outline-width : 0;
  }

  button{
      margin-top : 10px;
      background : linear-gradient(to right , #154fa7 , #277eff);
      padding : 10px;
      border-radius : 20px;
      border : 0;
      color : white;
      width : 100px;

      &:hover {
          cursor : pointer;
          background : linear-gradient(to right , #1d64cf , #4d94ff)
      }
  }
}


`;

export default Login