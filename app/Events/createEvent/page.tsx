
import CreateForm from "./Components/Form"
import { eventDetails } from "@/types"



export async function action(data: eventDetails){
  
    try{
      const createEvent = await fetch("/api/events/create",{
        method: "POST",
        body: JSON.stringify(data)
      })
      const response = await createEvent.json()
      
      return {...response}
      }
    catch(err: any){
      return {...err}
    }
  }
  



async function Page() {
    

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-center">Create Event</h3>
        <CreateForm />
    </div>

  )
}

export default Page

