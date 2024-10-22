"use server"
import prisma from "@/lib/db";
import { Regdata } from "@/types";
import { sign } from "jsonwebtoken";


export async function action(data: Regdata) {
    data = {...data, password: sign(data.password, process.env.JWT_SECRET as string)}
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
