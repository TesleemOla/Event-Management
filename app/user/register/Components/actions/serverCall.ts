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
        throw err
    }
}
