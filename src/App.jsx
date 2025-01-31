import { useState } from 'react'
import './App.css'
import data from "./data/json/data.json"
import TimeCard from './components/TimeCard/TimeCard'
import UserCard from './components/UserCard/UserCard'

function App() {
  const [time, setTime] = useState("weekly")

  return (
    <>
      <div className='CardContainer'>
        <div className='ContainerUser'>
          <UserCard time= {time} setTime={setTime}/>
        </div>
        <div className='ContainerTimeCard'>
          {
              data.map((d, key)=>{
                  return (
                    <TimeCard key={key} d={d} time={time}/>
                  )
              })
            }
        </div>
      </div>
    </>
  )
}

export default App
