import { sign } from "jsonwebtoken"

export const signPwd =(pwd:string)=>{
    return  sign(pwd, process.env.JWT_SECRET as string)
}