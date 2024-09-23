import { NextRequest, NextResponse} from "next/server"
import prisma from "@/lib/db"
export const dynamic = 'force-static'

export async function POST(req: NextRequest) {
    const { eventTitle, eventDate, eventTime } = await req.json()
   
    try {
        const newEvent = await prisma.event.create({
            data: {
                eventTitle,
                eventDate,
                eventTime
            }
        })
            
            return Response.json({ data: newEvent, message: "New event created", status: 201 })

    } catch (err) {
        return Response.json({ error: err, status: 500 })
    }

    
}