import React from 'react'
import useCounter from '../Hooks/useCounter'

export default function CustomCounter() {
    const [count,Increment,Decrement,Reset]= useCounter(0,5)
  return (
    <div>
       count = {count}
       <button onClick={Increment}>Increment</button>  
       <button onClick={Decrement}>Decrement</button>  
       <button onClick={Reset}>Reset</button>  
    </div>
  )
}
