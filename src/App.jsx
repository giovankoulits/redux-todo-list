import { useDispatch } from 'react-redux';
import { incremented, decremented } from './features/counter/counterSlice';
import Header from './Header';
function App() {
  const dispatch = useDispatch();


  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => dispatch(incremented())} style={{ margin: "20px" }}>+</button>
      <Header />
      <button onClick={() => dispatch(decremented())} style={{ margin: "20px" }}>-</button>
    </div >
  )
}

export default App


