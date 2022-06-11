import React from 'react'
import '../styles/Week.css'



function Week() {
    const days = ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota']

    const Week = days.map((day,index)=>
            <div key={index}>
            {day}
            </div>
            )
  return (
    <div className='week'>{Week}</div>
  )
}

export default Week