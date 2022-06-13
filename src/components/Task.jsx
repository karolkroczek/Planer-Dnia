import React from 'react'
import { useState } from 'react'
import '../styles/Task.css'

function Task({title,state}) {
  const[done, setDone] = useState(state);

  return (
    <div className='task-cointainer'>
      <input className='checkbox' type='checkbox'/>
       <div className={done?'title done':'title'}>
         <p>{title}</p>    
       </div>
      </div>
  )
}

export default Task