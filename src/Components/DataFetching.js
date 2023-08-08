import React, {useState,useEffect} from 'react'
import axios from 'axios'

export default function DataFetching() {
    const [posts,setPosts]=useState({})
    const [id,setId]= useState(1)
    const [idFromButtonClick,setIdFromButtonClick]= useState(1)
    
    const handler=()=>{
        setIdFromButtonClick(id)
    }
    useEffect(()=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            setPosts(res.data)
        })
        .catch(err=>{
            // console.log(err)
            console.log("Error Occured")
        })
    },[idFromButtonClick])
  return (
    <div>
      <input type='text' value={id} onChange={(e)=>setId(e.target.value)}/>
      {/* <ul>
        {
            posts.map(post=><li key={post.id}>{post.title}</li>)
        }
      </ul> */}
      <button type='submit' onClick={handler}>Fetch data</button>
      <h1>{posts.title}</h1>
    </div>
  )
}
