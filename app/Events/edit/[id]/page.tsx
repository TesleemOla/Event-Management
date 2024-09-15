import React from 'react'
import prisma from '@/lib/db'
import EditIcon from '@/app/Components/icons/editIcon'
import Link from 'next/link'

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
        Events for {id}

        <div className="flex flex-col gap-2 my-3 items-center">
          <label htmlFor="events" className="text-sm/6 font-medium" >Events</label>
          <select id="events" className={"text-black border-1 p-3"}>
            <option value="all">All Events</option>
            <option value="myevents">My Events</option>
          </select>
        </div>
        {
        allEvents.map(({eventDate, eventTime, eventTitle, id})=>{
          return <div key={id} className="grid grid-flow-col justify-between border-2 p-4">
            <p className="flex flex-col">
              <span>{eventDate}</span>
              <span>{eventTime}</span>
            </p>
            <p className="text-center font-extrabold text-2xl">{eventTitle}</p>
            <Link href={`/Events/${id}`}><EditIcon /></Link>
          </div>
        })
        }
    </div>
  )
}

export default SingleEvent