import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
 todos : []
};


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state , action) => {
        state.todos = [...state.todos , action.payload]
      },
    deleteTodo : (state, action) => {
        const index  =  state.todos.findIndex(
            (todo) => todo === action.payload
          );
        
        let newTodos = state.todos

        if(index >= 0){
            newTodos.splice(index , 1)
        }
 
        state.todos = newTodos
    },
    deleteAll : (state, action) => {
        state.todos = []
    }
   
  },
  
});

export const { addTodo , deleteTodo , deleteAll} = todoSlice.actions;
export const selectTodos = (state) => state.todo.todos;

export default todoSlice.reducer;
