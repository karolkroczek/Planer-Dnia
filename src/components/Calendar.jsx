import React, { useEffect } from 'react'
import DayCard from './DayCard';
import Week from './Week';
import CalendarHeader from './CalendarHeader'
import '../styles/Calendar.css'


function Calendar({year,monthId,month,setMonth,setMonthId,months}) {
    const xd = []
    const blankDays = []

    const NumberDaysInMonth = (year,month)=>{
        const date = new Date(year,month+1,0);
        const NumberOfDays = date.getDate()
        return NumberOfDays
    }
    let numberOfDays = NumberDaysInMonth(year,monthId)

        for(let i =1;i<=numberOfDays;i++){
            xd.push(i)
        }


    const numberS = xd.map((n,index)=>
    <DayCard key={index} dayNumber={n}/>
    )


    const newData = new Date(year,monthId,1)
    let firstDay = newData.getDay();

    for(let i = 0;i<firstDay;i++){
        blankDays.push(
            <DayCard dayNumber={null} />
        )
    }
    const blankdd = blankDays.map(day=>
        <>
        {day}
        </>
        )


    const allDay = [...blankDays, ...numberS]
  return (
    <div>
    <div>{monthId}</div>
    <CalendarHeader months={months} setMonth={setMonth} yearValue={year} month={month} setMonthId={setMonthId} monthId={monthId}/>
    <Week/>
    <div className='calendar'>{allDay}</div>
    </div>
  )
}

export default Calendar