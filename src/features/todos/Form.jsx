import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from './todosSlice';
const Form = () => {
   const [text, setText] = useState("")
   const dispatch = useDispatch();
   return (
      <form className="input-section" onSubmit={e => {
         e.preventDefault()
         if (text.length > 0) {
            dispatch(addToDo({ text, completed: false, active: true }))
            setText("")
         }
      }}>
         <input value={text} onChange={e => setText(e.target.value)} type="text" placeholder="Add item..." />
         <button type="submit" className="add">Add Todo</button>
      </form>
   )
}

export default Form