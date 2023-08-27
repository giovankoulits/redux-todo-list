import { useDispatch } from 'react-redux';
import { deleteTodo } from './todosSlice';
const Todo = ({ text, id }) => {
   const dispatch = useDispatch()
   return (
      <h1 onClick={() => dispatch(deleteTodo(id))}>{text}</h1>
   )
}

export default Todo