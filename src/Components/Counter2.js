import React, {useState} from 'react'

export default function Counter2() {
    const [name,setName]=useState({firstname:'',lastname:''})
  return (
    <div>
      <form>
        <input type='text'  value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})}/>
        <input type='text'  value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}/>
        <h1>your firstname is - {name.firstname}</h1>
        <h1>your lastname is - {name.lastname}</h1>
      </form>
    </div>
  )
}
