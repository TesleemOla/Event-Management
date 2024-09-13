import React from 'react'
import prisma from "@/lib/db"


async function Page() {
    const users =[]
    prisma.user.findMany()
    .then(res=> users.push(res))
    
    async function eventAction(formdata: FormData){
      "use server"
    
      const newObj=Object.fromEntries(Array.from(formdata.keys()).slice(1).
      map(key => [key, formdata.getAll(key).length > 1 ? formdata.getAll(key) : formdata.get(key)]))

      const newEvent = await prisma.event.create({
        data: {
          ...newObj
        }
      })
     console.log(newEvent)
    }
  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-center">Create Event</h3>
      <form action={eventAction} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventtitle">Event Title</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="eventtitle"
            type="text"
            name="eventTitle"
            placeholder="Enter event title"
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagelink">Image</label>
          <UploadBtn />
        </div> */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventDate">Date</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="eventDate"
            type="date"
            name="eventDate"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventTime">Time</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="eventTime"
            type="time"
            name="eventTime"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Event
        </button>
      </form>
      
    </div>

  )
}

export default Page

