"use server"
import { hash, compare, genSaltSync } from "bcrypt"

export const signPwd =async(pwd:string)=>{
    const salt = genSaltSync(10)
    try{
        const hashedPwd =hash(pwd, salt)
        return hashedPwd
    }
    catch(err:any){
        throw err?.message}
}


export const verifyPwd = async(pwd:string, dbHash:string)=>{
    compare(pwd, dbHash )
    .then((res:boolean)=> {
        console.log(res)
        return res
    })
    .catch((err:any)=> {throw err?.message})
}