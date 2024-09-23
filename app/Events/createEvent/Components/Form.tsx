"use client"
import { SendButton } from "@/app/Components"
import { action } from "../page"
import { showToast } from "@/app/Components/toastItem"
import { useRef } from "react"


const CreateForm = () =>{
  const formRef = useRef<HTMLFormElement|null>(null)
  
    const eventAction=async(formData: FormData)=>{
      
        const eventTitle = formData.get("eventTitle") as string
        const eventDate = formData.get("eventDate") as string
        const eventTime = formData.get("eventTime") as string
        formRef?.current?.reset()      

        const data = {eventTitle, eventDate, eventTime}
        const result = await action(data)
        console.log(result)
        result?.status === 201 ?
         showToast("success", "New event added")
                 :showToast("error", "an error occured")

    }

    return(
         <form action={eventAction} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={formRef} >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventtitle">Event Title</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="eventtitle"
              type="text"
              name="eventTitle"
              placeholder="Enter event title"
              required
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
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventTime">Time</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="eventTime"
              type="time"
              name="eventTime"
              required
            />
          </div>
     
          <SendButton btnfunc='Create Event' />
        </form>

    )
}

export default CreateForm
