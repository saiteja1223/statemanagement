import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/TodoSlice';
import './addtodo.css'
function AddTodo() {
    const[input,setInput]=useState('')
    const dispatch=useDispatch();
    const addTodoHandler=(e)=>{
        e.preventDefault();
         dispatch(addTodo({text:input}))
        setInput('')
        console.log(input)
    }
  return (
    <form onSubmit={addTodoHandler} className='sform'>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <button type='submit'>AddTodo</button>
    </form>
   
    
  )
}

export default AddTodo


