import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from './todosSlice';
import { ImBin } from 'react-icons/im';

import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
const Todo = ({ text, id, completed }) => {
   const dispatch = useDispatch()
   return (
      <li className="li">
         <span onClick={() => dispatch(toggleTodo(id))} className="span-button">{completed ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}</span>
         <span style={{ textDecoration: `${completed ? "line-through" : ""}` }} className="todo-text">{text}</span>
         <span onClick={() => dispatch(deleteTodo(id))} className="span-button"><ImBin /></span>
      </li >
   )
}


export default Todo