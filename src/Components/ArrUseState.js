import React, {useState} from 'react'

export default function ArrUseState() {
    const [items,setItems]=useState([])
    const update=()=>{
        setItems([...items,{
            id:items.length,
            value: Math.floor(Math.random*10)+1
        }])
    }
  return (
    <div>
      <button onClick={update}>Click</button>
      <ul>
        {
            items.map(item=>(<li key={item.id}>{item.id} {item.value}</li>))
        }
      </ul>
    </div>
  )
}
