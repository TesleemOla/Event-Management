import React from 'react'
import prisma from '@/lib/db'
import { SendButton, Heading } from '@/app/Components'


type paramProps ={
  params:{
  singleEvent: string  
  }
}



const SingleEvent = async({params}:paramProps) => {
  const { singleEvent } = params

  const eventDetails = await prisma.event.findUnique({
    where: { id: singleEvent}
  })

  async function submitEdit(formdata: FormData){
    "use server"
    
    const updated = Object.fromEntries(
      Array.from(formdata.keys()).slice(1).map(key => [key, formdata.getAll(key).length > 1 ? formdata.getAll(key) :
        formdata.get(key)])) 
    const data = { eventTitle: updated.eventTitle?.toString(),
      eventDate: updated.eventDate?.toString(),
      eventTime: updated.eventTime?.toString()
    }
      
  
    if(updated.eventTitle !== eventDetails?.eventTitle 
    || updated.eventDate !== eventDetails.eventDate 
    || updated.eventTime !== eventDetails.eventTime){
        const edited = await prisma.event.update({
          where: {id: singleEvent},
          data: data,
        })
    console.log(edited)
    
      }
    
  }
 
  return (
    <div className="text-left w-2/5 mx-auto ">
      <Heading heading="Edit Single Event" />
      <form action={submitEdit}>
        <div className="flex flex-col">
          <label htmlFor="eventTitle">Event Title</label>
          <input
            className="bg-gray-200 shadow-inner rounded-l p-2 flex-1" id='eventTitle' name="eventTitle"
            defaultValue={eventDetails?.eventTitle}  />
        </div>
        <div className="flex flex-col">
          <label htmlFor="eventTitle">Event Date</label>
          <input
            className="bg-gray-200 shadow-inner rounded-l p-2 flex-1" id='eventDate' name="eventDate"
            defaultValue={eventDetails?.eventDate} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="eventTitle">Event Time</label>
          <input
            className="bg-gray-200 shadow-inner rounded-l p-2 flex-1" id='eventTime' name="eventTime"
            defaultValue={eventDetails?.eventTime} />
        </div>
        <div className="text-center">
          <SendButton btnfunc='Update Event'/>
        </div>
      </form>
    </div>
  )
}


export default SingleEvent