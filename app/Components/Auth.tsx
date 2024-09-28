"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import React from 'react'
    
const Auth = () => {
    const { data, status } = useSession()
   
  return (
    <>
          <Link href={
              status !== "authenticated" ? "/user/register" :
                  "#"}
              className="md:bg-red-600 md:text-white p-2 md:rounded-lg md:h-fit">
              {status !== "authenticated" ? 'Register' :
                  data?.user?.email}
          </Link>
        <button type="button" onClick={
            ()=> status==="authenticated"? signOut(): signIn()
            } className="bg-green-600 text-white w-10 p-2 md:rounded-lg min-w-fit md:h-fit">
            {
                status === "authenticated"?
                "SignOut": "SignIn"
            }
        </button>
          
    </>
  )
}

export default Auth