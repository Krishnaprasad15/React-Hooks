import React, {useState} from 'react'

export default function Counter1() {
    const initialval=0
    const[count,setCount]=useState(initialval)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(initialval)}>Reset</button>
      <button onClick={()=>setCount(prevState=>prevState+1)}>Increment</button>
      <button onClick={()=>setCount(prevState=>prevState-1)}>Decrement</button>
    </div>
  )
}
