import Todos from "./features/todos/Todos"
/* import Filters from "./features/todos/Filters" */
import Form from "./features/todos/Form"
function App() {
  return <div className="todo-app">
    <Form />
    <Todos />
  </div >
}

export default App


