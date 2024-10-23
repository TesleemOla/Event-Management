"use server"
import prisma from "@/lib/db";
import { Regdata } from "@/types";



export async function action(data: Regdata) {
   
    try {

        const newUser = await prisma.user.create({
            data: data
        })
        return newUser
      

    }
    catch (err: any) {
        if (err?.PrismaClientInitializationError){
            throw "An error occured!"
        } else if (err?.PrismaClientKnownRequestError){
            throw "User already exists"
        }
        throw err
    }
}
