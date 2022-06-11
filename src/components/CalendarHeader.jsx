import React,{useState} from 'react'
import PagingBtn from './PagingBtn'
import '../styles/CalendarHeader.css'

export default function CalendarHeader({yearValue,month,setMonth,setMonthId,monthId,months}) {

  const [year, setYear] = useState(yearValue)
  
  return (
    <div className='calendar-header'>
        <PagingBtn year={year} setMonthId={setMonthId} setYear={setYear} months={months} setFunction={setMonthId} setMonth={setMonth} target={monthId} direction={-1}/>
        <h1>{month} {year}</h1>
        <PagingBtn year={year} setMonthId={setMonthId} setYear={setYear} months={months} setFunction={setMonthId} setMonth={setMonth} target={monthId} direction={1}/>
    </div>
  )
}
