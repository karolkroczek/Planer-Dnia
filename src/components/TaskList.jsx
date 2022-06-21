import React from 'react'
import { useState } from 'react'
import NewTaskInput from './NewTaskInput'
import Task from './Task'

function TaskList() {
  const [Tasks,setTasks] = useState([
    {
      title:'Przykładowe zadanie',
      state:false  
    }
  ]);

  const renderedTasks = Tasks.map((task,index)=>
  <Task key={index} title={task.title} desc={task.desc} state={task.state}/>
  )
  return (
    <div>
      <NewTaskInput Tasks={Tasks} setTasks={setTasks}/>
    <div>Lista zadań:
      {renderedTasks}
    </div>
    </div>
  )
}

export default TaskList