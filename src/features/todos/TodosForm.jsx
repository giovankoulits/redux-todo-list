import { useSelector, useDispatch } from 'react-redux';
import { getTodos, addToDo } from './todosSlice';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Todo from './Todo';

const TodosForm = () => {

   const [text, setText] = useState("")
   const dispatch = useDispatch();
   const todos = useSelector(getTodos)

   return (
      <div >
         {todos.map((todo) => <Todo {...todo} key={nanoid()} />)}
         <form onSubmit={e => {
            e.preventDefault()
            dispatch(addToDo(text))
         }}>
            <input onChange={e => setText(e.target.value)} type="text" placeholder='add to do' />
            <button type='submit'>add to do</button>
         </form>
      </div>
   )
}

export default TodosForm