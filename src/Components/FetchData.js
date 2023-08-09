import React, {useEffect,useReducer} from 'react'
import axios from 'axios'
const initialState={
    loading:true,
    posts:{},
    error:''
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'SUCCESS':
            return{
                loading:false,
                posts: action.payload,
                error:''
            }
        case 'ERROR':
            return {
                loading:false,
                posts:{},
                error:'Something went wrong'
            }
        default:
            return state
    }
}
export default function FetchData() {
    const [state,dispatch]= useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'SUCCESS' , payload:res.data})
        })
        .catch(err=>{
            dispatch({type:"ERROR"})
        })
    },[])
  return (
    <div>
      {state.loading? 'loading': state.posts.title}
      {state.error? state.error:null}
    </div>
  )
}
