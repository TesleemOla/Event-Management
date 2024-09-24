import prisma from "@/lib/db";
import { sign } from "jsonwebtoken";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest){
    const { firstName, lastName, email, password, role} =await req.json()
    console.log(firstName, lastName, email, password, role)
    const newpwd = sign(password, process.env.JWT_SECRET as string)
    if(!firstName || !lastName || !email || !password || !role){
        throw new Error( "Please provide all required values")
    }
    const data = {
        firstName, lastName, email, password: newpwd, role
    }
    try{
        const newUser = await prisma.user.create({
            data: data
        })
        return Response.json({ data: newUser, message: "User successfully created",
            status: 201
        })
    }catch(err:any){
        throw Error(err?.message)
    }
}