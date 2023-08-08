import React, {useState} from 'react'
import HookMouse from './HookMouse'

export default function HookMouse2() {
    const [display,setDisplay]= useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>
            Toggle
      </button>
      {display && <HookMouse/> } 
    </div>
  )
}
