import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, getCounterValue } from './counterSlice';
import { useState } from 'react';

const CounterForm = () => {
   const [input, setInput] = useState(0)
   const dispatch = useDispatch();
   const value = useSelector(getCounterValue)

   return (
      <>
         <div style={{ display: "flex" }}>
            <h1>{value}</h1>
            <button onClick={() => dispatch(increment())} style={{ margin: "20px" }}>+</button>
            <button onClick={() => dispatch(decrement())} style={{ margin: "20px" }}>-</button>
         </div>
         <form onSubmit={(e) => {
            e.preventDefault()
            dispatch(incrementByAmount(input))
         }}
         >
            <input onChange={(e) => setInput(parseInt(e.target.value))} type="text" placeholder='increment by amount' />
         </form>
      </>
   )
}

export default CounterForm