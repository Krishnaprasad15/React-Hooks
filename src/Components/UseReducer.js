import React, {useReducer} from 'react'

const initialVal=0
const reducer=(state,action)=>{
    // if(state<0 || state>10) return state
    // else
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialVal
        default:
            return state
    }
}
export default function UseReducer() {
    const [count,dispatch]= useReducer(reducer,initialVal)
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}
