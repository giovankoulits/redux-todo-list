import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from './todosSlice';

const Todo = ({ filter, text, id, completed }) => {
   const dispatch = useDispatch()
   const style = { padding: "0px", lineHeight: "0px", marginRight: "20px", }
   return (
      <div style={{ display: `${completed && filter === "active" ? "none" : "flex"}`, alignItems: "center", }}>
         <div>
            <h1 style={{ ...style, textDecoration: `${completed ? "line-through" : ""}` }} >{text}</h1>
         </div >
         <div>
            <button onClick={() => dispatch(deleteTodo(id))}>X</button>
            <button onClick={() => dispatch(toggleTodo(id))}
            >V</button>
         </div >
      </div >
   )
}

export default Todo