import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from './todosSlice';
import { ImBin, ImPencil } from 'react-icons/im';
import { useState } from 'react';

import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
const Todo = ({ text, id, completed }) => {

   //hooks
   const [textToEdit, setTextToEdit] = useState(text)
   const [showInput, setShowInput] = useState(false)
   const dispatch = useDispatch()

   //HTML elements
   const editInput = <input value={textToEdit} onChange={e => setTextToEdit(e.target.value)} type="text" />
   const editButton = <button onClick={() => { setShowInput(false); dispatch(editTodo({ id, text: textToEdit })) }} type="submit" id='add-button' className="add">Submit</button>
   const pencilButton = <span onClick={() => { setShowInput(prev => !prev) }} className="span-button">
      <ImPencil />
   </span>
   const binButton = <span onClick={() => dispatch(deleteTodo(id))} className="span-button"><ImBin /></span>
   const checkBox = <span onClick={() => dispatch(toggleTodo(id))} className="span-button">{completed ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}</span>
   const liStyle = { backgroundColor: `${showInput ? "" : "rgb(38 37 37)"}`, boxShadow: `${showInput ? "none" : "0 2px 4px rgba(0, 0, 0, 0.2)"}` }

   ///
   return (
      <li style={liStyle} className="li">
         <div style={{ display: `${showInput ? "flex" : "none"}` }} className="edit-section">
            {editInput}
            {editButton}
         </div>
         {!showInput && checkBox}
         {!showInput && <span style={{ textDecoration: `${completed ? "line-through" : ""}`, color: "#fff" }} className="todo-text">{text}</span>}
         {!showInput && pencilButton}
         {!showInput && binButton}
      </li >
   )
}


export default Todo