"use client"
import React, { useState} from 'react'
import prisma from "@/lib/db"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { format, add, startOfToday, parse, eachDayOfInterval, endOfMonth, 
  isToday, isSameMonth, getDay
 } from "date-fns"
import Link from 'next/link'


 function Page() {

  // const events = await prisma.event.findMany()

  // console.log(events)

  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState<Date>()
  const [currMonth, setCurrMonth] = useState(()=> format(today, 'MMM-yyy'))

  let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date())
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: endOfMonth(firstDayOfMonth)
  })

  const getPrevMonth =(event: { preventDefault: () => void })=>{
    event.preventDefault()
    const firstDayOfPrevMonth =   add(firstDayOfMonth, { months: -1});
    setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyy"))
  }

  const getNextMonth = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const firstDayOfNextMonth =
      add(firstDayOfMonth, { months: +1 });
    setCurrMonth(format(firstDayOfNextMonth, "MMM-yyy"))
  }
  const colStartClasses =[
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ]
  const days = ["sun", "mon", "tue", "wed", "thu", "fri","sat"]
  return (
    <div className="mx-auto">
 
      <div className="flex flex-col gap-2 my-3 items-center">
        <label htmlFor="events" className="text-sm/6 font-medium" >Events</label>
        <select id="events" className={"text-black border-1 p-3"}>
          <option value="all">All Events</option>
          <option value="myevents">My Events</option>
        </select>
      </div>
      <div>
        {/* {
          events.map((item)=> <p key={item.id}>{item.eventDate}</p>)
        } */}
      </div>
      <div className="flex flex-col items-center justify-between">
        <div className="flex gap-6 sm:gap-12">
        <p className="font-semibold text-xl">
          { format(firstDayOfMonth, "MMMM yyyy")}
        </p>
        <div className="flex items-center justify-evenly gap-12 sm:gap-12 text-xl">
          
          <ChevronLeftIcon className="w-6 h-6 cursor-pointer mr-5" onClick={getPrevMonth} />
          <ChevronRightIcon className="w-6 h-6 cursor-pointer ml-5" onClick={getNextMonth} />
        </div>
        </div>
          <div className="grid grid-cols-7 gap-6 sm:gap-12 mt-8 place-items-center">
          {
            days.map((day, id)=>{
              return (
                <div key={id} className="font-semibold" >
                  {day.toUpperCase()}
                </div>
              )
            })
          }
          
          
            {
              daysInMonth.map((day,id)=>{
                return (
                  <Link href={`/Events/edit/${day}:${currMonth}`} key={id} className={colStartClasses[getDay(day)]} onClick={()=>{setSelectedDay(day)}}>
                    <p className={`cursor-pointer flex items-center justify-center font-semibold
                    h-8 w-8 rounded-full hover:text-white  ${isSameMonth(day, today) ? 
                      "text-gray-900": "text-gray-400"
                    } ${!isToday(day) && "hover:bg-blue-500"} 
                    ${isToday(day) && "bg-red-500 text-white"}
                    // ${day === selectedDay && "active:text-black active:bg-yellow"}
                    `} >
                      {format(day, "d")}
                    </p>
                  </Link>
                )
              })
            }
          </div>
        </div>

      </div>
   
  )
}

export default Page