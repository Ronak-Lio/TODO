import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user : userReducer,
    todo : todoReducer
  },
});
