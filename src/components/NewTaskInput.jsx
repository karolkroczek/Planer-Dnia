import React from 'react'
import { useState } from 'react'
import '../styles/NewTaskInput.css'

function NewTaskInput({Tasks,setTasks}) {
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

        e.target[0].value = '' //chwilowe rozwiazanie
    }
  return (
    <div className=''>
        <form onSubmit={handleSubmit} method='get'>
        <input className='add-input' placeholder='nazwa' name='desc' onChange={handleChange}/>       
        </form>

    </div>
  )
}

export default NewTaskInput