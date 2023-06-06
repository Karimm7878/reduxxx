import React from 'react'
import Edittask from './Edittask'

const Task = ({el}) => {
  return (
    <div className='test'>
      <table className='styled-table'>
      <thead>
        <tr>
        <th>to do</th>
        <th>done or not</th>
        <th>action</th>
        
        </tr>
        </thead>
        <tbody>
      
       
        <tr className='active-row'>
           <td> {el.description} </td>
           <td>{el.isDone}</td>
          <td><Edittask el={el}/></td>
           
          
           </tr>

          


     
  
  </tbody>
  </table>
  
  
  </div>
  )
}

export default Task
