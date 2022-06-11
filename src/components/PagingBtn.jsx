import React from 'react'
import '../styles/PagingBtn.css'

function changeHeaderName(monthId,months,setMonth,setMonthId,direction,year,setYear){
  let newMonthValue = monthId+direction
  let HeaderMonthId = Math.abs(newMonthValue%12)

  if(monthId>0){

    if(HeaderMonthId==0&&direction>0) {
      let newYearValue = year+direction
      setYear(newYearValue)
    }
  
    if(HeaderMonthId==11&&direction<0) {
      let newYearValue = year+direction
      setYear(newYearValue)
    }
  
    setMonth(months[HeaderMonthId])

  }
  if(monthId<=0){
  setMonth(months[11])
  setMonthId(11)
  setYear(year-1)
}
}

export default function PagingBtn({direction,target,setFunction,setMonth,setMonthId,months,year,setYear}) {

    const PagingOnClick = (target,direction)=>{
      const valueToMove = target+direction

      setFunction(valueToMove);

      changeHeaderName(target,months,setMonth,setMonthId,direction,year,setYear);
    }
    
  return (
    <div onClick={()=>PagingOnClick(target,direction)} className={(direction<0)?'backward':'forward'}></div>
  )
}
