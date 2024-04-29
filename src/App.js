
import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  const[value,setValue]=useState(false)
  function handleClick(){
    console.log(value)
    setValue(!value)
  }
  return (
    <div className='first'>
      <div>
        Learn how to use redux
        
      </div>
   <div><AddTodo>
   </AddTodo></div>
   <div><Todo></Todo></div>
   </div>
  );
}

export default App;
