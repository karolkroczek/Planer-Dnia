import React from 'react'
import { useState } from 'react'

function AddNewTask({Tasks,setTasks}) {
    const[value,setValue]= useState()

    const handleChange = (e) => { 
        setValue(e.target.value)
     }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setTasks([...Tasks,{
            title:value,
            state:false
        }])
    }
  return (
    <div>
        <form onSubmit={handleSubmit} method='get'>
        <input placeholder='nazwa' name='desc' onChange={handleChange}/>       
        </form>

    </div>
  )
}

export default AddNewTask