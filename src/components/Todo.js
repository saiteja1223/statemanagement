import React from 'react'
import{useSelector,useDispatch} from 'react-redux'
import { removeTodo ,updateTodo} from '../features/todo/TodoSlice'
function Todo() {
    
   const todos= useSelector(state=>state.todos)
   
   const dispatch=useDispatch();
   function handleUpdate(id,newText){
    dispatch(updateTodo({ id, text: newText }))
   }
  return (
    <>
    
    {todos.map((todo)=>{
        return(
        <li key={todo.id}>
          <input
            type="text"
            value={todo.text}
            onChange={(e) => handleUpdate(todo.id, e.target.value)}
          />
            <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
        </li>)
    })}
    </>
  )
}

export default Todo