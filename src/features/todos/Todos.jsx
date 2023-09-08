import { getTodos, getVisibilityFilter } from './todosSlice';
import { useSelector } from 'react-redux';
import Todo from './Todo';
import Filters from './Filters';

const Todos = () => {
   const todos = useSelector(getTodos)
   const filter = useSelector(getVisibilityFilter)
   //Copy State Todos
   let visibleTodos = todos.concat()

   if (filter === "active") {
      visibleTodos = todos.filter(todo => todo.completed === false)
   }
   if (filter === "completed") {
      visibleTodos = todos.filter(todo => todo.completed === true)
   }

   return (
      <div className="todos" >
         <Filters />
         <ul className="todo-list">
            {visibleTodos.map((todo, index) => {
               const props = { ...todo, filter }
               return <Todo {...props} key={index} />
            })}
         </ul>
      </div>
   )
}

export default Todos

