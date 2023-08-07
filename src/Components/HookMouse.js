import React, {useState,useEffect} from 'react'

export default function HookMouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const coordinates=(e)=>{
        console.log("Event called")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("Use effect called")
        window.addEventListener('mouseover',coordinates)
    },[])
  return (
    <div>
        Xaxix - {x} Yaxis - {y}
    </div>
  )
}
