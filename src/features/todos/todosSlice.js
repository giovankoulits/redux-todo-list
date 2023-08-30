import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
export const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [], visibilityFilter: 'all' },
  reducers: {
    addToDo: (state, action) => {
      state.todos.push({ ...action.payload, id: nanoid() });
    },
    deleteTodo: (state, action) => {
      const todosAfterDelete = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: todosAfterDelete };
    },
    toggleTodo: (state, action) => {
      const todosAfterToggle = state.todos.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed, active: !todo.active }
          : todo;
      });
      return { ...state, todos: todosAfterToggle };
    },
    editTodo: (state, action) => {
      const todosAfterEdit = state.todos.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo;
      });
      return { ...state, todos: todosAfterEdit };
    },
    setVisibilityFilter: (state, action) => {
      return { ...state, visibilityFilter: action.payload };
    },
  },
});

export const getTodos = (state) => state.todos.todos;
export const getVisibilityFilter = (state) => state.todos.visibilityFilter;
export const {
  addToDo,
  deleteTodo,
  toggleTodo,
  setVisibilityFilter,
  editTodo,
} = todosSlice.actions;
export default todosSlice.reducer;
