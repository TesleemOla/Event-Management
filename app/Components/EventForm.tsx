"use client"
import { useActionState } from "react"

export default function EventForm(){

    const [state, formAction] = useActionState(eventAction, { submitted: false })
    async function eventAction(state: { submitted: boolean } | undefined, formdata: FormData)
        : Promise<{ submitted: boolean } | undefined> {
        // "use server"

        const newObj = Object.fromEntries(Array.from(formdata.keys()).slice(1).
            map(key => [key, formdata.getAll(key).length > 1 ? formdata.getAll(key) : formdata.get(key)]))
        console.log(newObj)
        const data = {
            eventDate: newObj.eventDate as string,
            eventTitle: newObj.eventTitle as string,
            eventTime: newObj.eventTime as string
        }
        try {
            // const newEvent = await prisma.event.create({
            //     data: data
            // })
            // if (newEvent) {
                return new Promise((resolve) => {
                    // Simulate async operation
                    setTimeout(() => {
                        resolve({ submitted: true });
                    }, 1000);
                })
            // }
        } catch (err) {
            return new Promise((resolve) => {
                // Simulate async operation
                setTimeout(() => {
                    resolve({ submitted: true });
                }, 1000);
            })
        }
    }
    return (
        <>
           
</>
    )
}