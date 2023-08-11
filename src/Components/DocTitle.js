import React, {useState} from 'react'
import useDocTitle from '../Hooks/useDocTitle'

export default function DocTitle() {
    const [count,setCount]= useState(0)
    useDocTitle(count)
  return (
    <div>
      count- {count}
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
