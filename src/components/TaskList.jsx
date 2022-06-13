import React from 'react'
import { useState } from 'react'
import Task from './Task'
import AddNewTask from './AddNewTask'

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
      <AddNewTask Tasks={Tasks} setTasks={setTasks}/>
    <div>Lista zadań:
      {renderedTasks}
    </div>
    </div>
  )
}

export default TaskList