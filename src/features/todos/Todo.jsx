import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from './todosSlice';
import { ImBin } from 'react-icons/im';
import { BsFillCheckCircleFill, BsFillCircleFill } from 'react-icons/bs';

const Todo = ({ text, id, completed, active }) => {
   const dispatch = useDispatch()
   return (
      <li className="li">
         <span onClick={() => dispatch(toggleTodo(id))} className="span-button">{completed ? <BsFillCheckCircleFill /> : <BsFillCircleFill />}</span>
         <span style={{ textDecoration: `${completed ? "line-through" : ""}` }} className="todo-text">{text}</span>
         {/*   <span className="todo-text">date</span> */}
         <span onClick={() => dispatch(deleteTodo(id))} className="span-button"><ImBin /></span>
      </li >
   )
}


export default Todo