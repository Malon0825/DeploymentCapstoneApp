import React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'
import { generateDate, months } from '../constants/Calendar'
import cn from '../constants/CN'

// Main Function
const LandingActivitiesTab = () => {

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const currentDate = dayjs()

  const [today, setToday] = useState(currentDate)

  

  return (

    <div className="relative w-full">

      <div className="md:mt-0 mt-6 sm:ml-20 sm:mr-20 lg:ml-10 lg:mr-10 mr-10 ml-10 flex flex-col sm:gap-0 gap-6 relative xl:items-start items-end">

          <a className="sm:text-white text-fontColor sm:text-2xl text-xl font-poppins
                                transition-all duration-3000
                              hover:text-fontColor ease-in-out"
              href='/activity'>
            Activities
          </a>

          <div className="bg-gray-700 bg-opacity-25 flex flex-col h-[305px] sm:w-[550px] lg:w-[400px] xl:w-[600px] w-full sm:mt-8 rounded-2xl">



            <div className="relative sm:mt-6 mt-8 flex items-start w-full">

                <h1 className="text-white sm:text-xl font-poppins hover:scale-110 ml-6
                                            hover:text-fontColor transition-all duration-300
                                              ease-linear">
                    {months[today.month()]}, {today.year()}
                </h1>
     
                <div className="absolute right-6 flex flex-row gap-3">


                      <button className="text-white sm:text-xl font-poppins sm:hover:scale-150
                                           transition-all duration-300 ease-in-out"
                              onClick={() => {setToday(today.month(today.month() - 1))}}>
                        &lt;
                      </button>     

                      <button className="flex text-fontColor font-poppins sm:text-xl
                                      sm:hover:bg-slate-700 rounded-lg 
                                      transition-all ease-in-out duration-300"
                              onClick={() => {setToday(currentDate)}}>
                                      Today
                      </button>

                      <button className="text-white sm:text-xl font-poppins sm:hover:scale-150 
                                            transition-all duration-300 ease-in-out"
                              onClick={() => {setToday(today.month(today.month() + 1))}}>
                        &gt;
                      </button>

                </div>

            </div>  <button></button>

            <div className="relative flex flex-col mt-3 m-5 gap-2">

                <div className="w-full grid grid-cols-7">

                        {days.map((day, index) => {
                          
                          return <h1 className="flex justify-center font-poppins text-fontColor sm:text-lg" 
                                     key={index}>
                                      {day}
                                 </h1>
                        })}
                </div>

                <div className="w-full grid grid-cols-7 calendar-num-style gap-1">

                    {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {

                      return (

                        <div className="flex justify-center border-t-2 border-t-primary calendar-hover-glow" 
                             key={index}>

                                <h1 className={cn(currentMonth ? "" : "text-gray-600", 
                                                  today ? "calendar-num-style-today" : "")}>

                                  {date.date()}

                                </h1>

                        </div>
                      )
                    })}        
                </div>

            </div>   
              
          </div>
      </div>

    </div>
  )
}

export default LandingActivitiesTab
