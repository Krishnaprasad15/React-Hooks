import React, {useState,useEffect,useRef} from 'react'

export default function HookTimer() {
    const [timer,setTimer]= useState(0)
    const interval= useRef()

    useEffect(()=>{
        interval.current= setInterval(()=>{
            setTimer(prevState=>prevState+1)
        },1000)
        return ()=>{
            clearInterval(interval.current)
        }
    },[])
  return (
    <div>
      Hook Timer - {timer}
      <button onClick={()=> clearInterval(interval.current)}>Stop</button>
    </div>
  )
}
