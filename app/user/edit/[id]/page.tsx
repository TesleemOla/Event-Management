// "use client"
import { InputField } from "@/app/Components";
import prisma from "@/lib/db"
import { useState } from "react";


async function EditPage(eventData:{params:{id: String}}){
    const {params} = eventData
    // const [isEditing, setIsEditing] = useState(false);
    const event = await prisma.event.findUnique({
        where: {
            id: (params.id).toString()
        }
    })
        console.log(event)

    return <div>
        <form>
          
            <div>
                <label htmlFor="eventName">Event Name</label>
                <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    defaultValue={event?.eventTitle}
                    // disabled={!isEditing}
                />
            </div>

            
            <button type="button">
                Edit
            </button>
            {/* {isEditing && ( */}
                <button type="submit">Save</button>
            {/* )} */}
        </form>
        
        </div>
}

export default EditPage