import { eventDetails } from "@/types"

export async function action(data: eventDetails) {

    try {
        const createEvent = await fetch("/api/events/create", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const response = await createEvent.json()

        return { ...response }
    }
    catch (err: any) {
        return { ...err }
    }
}