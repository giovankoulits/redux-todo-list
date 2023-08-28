import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from './todosSlice';

const Form = () => {
   const [text, setText] = useState("")
   const dispatch = useDispatch();
   return (
      <form onSubmit={e => {
         e.preventDefault()
         if (text.length > 0)
            dispatch(addToDo({ text, completed: false }))
      }}>
         <input onChange={e => setText(e.target.value)} type="text" placeholder='add to do' />
         <button type='submit'>add to do</button>
      </form>
   )
}

export default Form