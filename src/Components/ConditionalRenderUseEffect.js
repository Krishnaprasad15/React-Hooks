import React, {useState,useEffect} from 'react'

export default function ConditionalRenderUseEffect() {
    const [count,setCount]=useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{
        console.log("updated")
        document.title = `clicked ${count} times`
    },[count])
  return (
    <div>
      <input value={name} onChange={e=>setName(e.target.value)}/>
      <button onClick={()=>setCount(count+1)}>clicked {count} times</button>
    </div>
  )
}
