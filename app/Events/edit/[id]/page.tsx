import React from 'react'
import prisma from '@/lib/db'
import EventsMap from '@/app/Components/EventsMap'

interface params {
  params: {
    id: string
  }
}

const SingleEvent = async ({params}:params) => {
    const { id } = params
    const allEvents = await prisma.event.findMany({
      where: {eventDate: id}
    })

    
  return (
    <div>

        <div className="flex flex-col gap-2 my-3 items-center">
          <label htmlFor="events" className="text-sm/6 font-medium" >Events for {id}</label>
          <select id="events" className={"text-black border-1 p-3"}>
            <option value="all">All Events</option>
            <option value="myevents">My Events</option>
          </select>
        </div>
        {allEvents? <EventsMap allEvents={allEvents} />:<p>No Events Today</p>}
    </div>
  )
}

export default SingleEvent