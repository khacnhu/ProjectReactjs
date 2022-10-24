import React, {useState, useEffect} from 'react';
import './notification.scss';
// import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import { Clock } from '../../components/Clock/clock';
import { Slick } from '../../components/Slick/Slick';
// import { products } from '../../product'

export const Notification = () => {

    const [timerDays, setTimerDay] = useState()
    const [timerHours, setTimerHour] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()

    let interval;
  
    const startTimer = () => {
      const timeCountdown = new Date("October 30, 2022").getTime()
  
      interval = setInterval(()=>{
        const now = new Date().getTime()
        
        const distance = timeCountdown - now
        // console.log(distance)
  
        const days = Math.floor(distance/(24*60*60*1000))
  
        const hours = Math.floor((distance%(24*60*60*1000))/(60*60*1000))
  
        const minutes = Math.floor((distance%(60*60*1000))/(60*1000))
         
        const seconds = Math.floor((distance%(60*1000))/1000)
        
        if (distance<0){
          
          clearInterval(interval)
        } else {
          setTimerDay(days)
          setTimerHour(hours)
          setTimerMinutes(minutes)
          setTimerSeconds(seconds)
          // console.log(days, hours, minutes)
        }
  
      }, 1000)
    }
  
    useEffect(()=>{
      startTimer()
    })

  return (
      <>
    <div className='notification'>
        <div className = "notiContainer" >
            <Navbar/>
            <Clock timerDays = {timerDays} timerHours = {timerHours} timerMinutes = {timerMinutes} timerSeconds = {timerSeconds} />
            <div className = "slickNotification" >
              <Slick/>

            </div>
        </div>
        
    </div>
      </>
  )
}
