import React from 'react'
import { useSelector } from "react-redux";
import './App.css'
import Task from './Task';



function Tasks_list() {
    const task= useSelector((state)=>(state.task))
  
  return (
    <div className='test'>
     
      
        {task.map((el)=>(
        <Task el={el}/>
         
          


     
))}
  
  
  </div>
  
  )
}

export default Tasks_list

