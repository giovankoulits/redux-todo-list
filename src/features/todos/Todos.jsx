import { getTodos, setVisibilityFilter, getVisibilityFilter } from './todosSlice';
import { useSelector, } from 'react-redux';
import { useDispatch } from 'react-redux';
import Form
   from './Form';
import Todo from './Todo';

const Todos = () => {
   const dispatch = useDispatch()
   const todos = useSelector(getTodos)
   const filter = useSelector(getVisibilityFilter)
   return (
      <>
         {todos.map((todo, index) => {
            const props = { ...todo, filter }
            return <Todo {...props} key={index} />
         })}
         <Form />
         <button onClick={() => dispatch(setVisibilityFilter("all"))}  >All</button>
         <button onClick={() => { console.log(todos); dispatch(setVisibilityFilter("active")) }} >Active</button>
      </>
   )
}

export default Todos