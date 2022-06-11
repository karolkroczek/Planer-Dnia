import React from 'react'
import '../styles/DayCard.css'

function DayCard({dayNumber}) {
  return (
    <>
      <div className={dayNumber? 'day-card':'day-card off'}>
        {dayNumber? dayNumber:'.'}
      </div>
    </>
  )
}

export default DayCard