import { useState } from 'react'
import './styles/App.css'
import Calendar from './components/Calendar'

const months = [
  'Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpien','Wrzesień','Październik','Listopad','Grudzień'
]

function App() {
const data = new Date();
const year = data.getFullYear();
const MonthId = data.getMonth();
const MonthName = months[MonthId];
const day = data.getDate();


const [month,setMonth]= useState(MonthName);
const [monthId,setMonthId] = useState(MonthId);




return(
  <div>
    <Calendar setMonthId={setMonthId} setMonth={setMonth} months={months} year={year} monthId={monthId} month={month} day={day}/>
  </div>
)
}

export default App
