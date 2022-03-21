import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {logout } from "./features/user/userSlice";
import { useHistory } from "react-router-dom";
import { selectUser } from "./features/user/userSlice";
import { addTodo, selectTodos, deleteTodo, deleteAll } from "./features/todo/todoSlice";
import { AddCircleOutline } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo() {
  const user = useSelector(selectUser);
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const history = useHistory();

  const add_Todo = () => {
    if (input.trim() !== "") {
      if (!todos.includes(input)) {
        dispatch(addTodo(input));
      } else {
        alert("You have already added this todo");
      }
    }
    setInput("");
  };

  useEffect(() => {
    console.log("Todos are ", todos);
  }, [todos?.length]);

  return (
    <Container>
      <div className="header">
        <p>TODO APP</p>
        <button
          onClick={() => {
            dispatch(logout());
            history.push("/");
          }}
        >
          Logout
        </button>
      </div>
      <div className="todos">
        <div className="todo">
          <p>Welcome {user} 🎉</p>
          <div className="add_todo">
            <input
              type="text"
              placeholder="Add a new todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <AddCircleOutline className="add_icon" onClick={add_Todo} />
          </div>
          <div className="todos_list">
            {todos.map((todo, index) => (
              <div className="todo_element">
                <p className="number">{index + 1}</p>
                <p className="task">{todo}</p>
                <DeleteIcon
                  className="delete_icon"
                  onClick={() => {
                    dispatch(deleteTodo(todo));
                  }}
                />
              </div>
            ))}
          </div>
          {todos.length > 0 && (<div className="reset_list">
              <button
               onClick = {() => {
                   dispatch(deleteAll())
               }}  
            >Reset Todo List</button>
          </div>)}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #59f9b7, #66feea);
  display: flex;
  flex-direction: column;


  .header {
      display : flex;
      justify-content : space-between;
      width : 1300px;
      max-width : 90vw;
      margin-left  : auto;
      margin-right : auto;
      padding-top : 20px;
      
      p{
          margin-top : 0;
          margin-bottom : 0;
          font-size : 25px;
          font-weight : bold;
          font-family : "Helvetica Neue"
      }

      button{
      background : linear-gradient(to right , #154fa7 , #277eff);
      padding : 13px;
      border-radius : 22px;
      border : 0;
      color : white;
      width : 150px;

      &:hover {
          cursor : pointer;
          background : linear-gradient(to right , #1d64cf , #4d94ff)
      }
  }


  }

  .todos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .todo {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    width: 400px;

    @media (max-width: 400px) {
      width: 90vw;
    }

    p {
      text-align: center;
      font-weight: 500;
    }

    input {
      width: 90%;
      border: 1px solid lightgray;
      padding: 10px;
      border-radius: 5px;
      color: #5a5a5a;
      outline-width: 0;
    }

    

    .add_todo {
      display: flex;
    }

    .add_icon {
      margin-left: 5px;
      margin-top: auto;
      margin-bottom: auto;
      font-size: 35px;
      color: #3a3939;

      &:hover {
        color: #808080;
        cursor: pointer;
      }
    }
  }

  .todos_list {
    margin-top: 20px;
    max-height : 500px;
    overflow-y : scroll;

    ::-webkit-scrollbar {
        display : none
    }
  }

  .todo_element {
    display: flex;
    background-color: #e0dfdf;
    margin-bottom: 10px;
    width: 98%;
    border-radius: 5px;

    p {
      margin-top: 0;
      margin-bottom: 0;
      padding: 10px;
    }
  }

  .number {
    margin-right: 10px;
  }

  .task {
    flex: 1;
    text-align: left !important;
  }

  .delete_icon {
    margin-right: 10px;
    margin-top: auto;
    margin-bottom: auto;

    &:hover {
      cursor: pointer;
      color: #353434;
    }
  }

  .reset_list{
      button{
          border-radius: 20px;
          padding : 10px;
          width : 200px;  
          border : 0;
          background-color : #1f634b;
          color : #FFFFFF;

          &:hover {
              cursor : pointer;
              background-color : #309471;
          }
      }
  }
`;

export default Todo;
