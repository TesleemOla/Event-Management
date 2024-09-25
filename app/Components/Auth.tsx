"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import React from 'react'
    
const Auth = () => {
    const { data, status } = useSession()
   
  return (
    <div className="flex flex-col h-fit md:flex-row md:justify-around md:gap-40">
          <Link href={
              status !== "authenticated" ? "/user/register" :
                  "#"}
              className="md:bg-red-600 md:text-white p-3 py-1 md:rounded-2xl md:h-fit">
              {status !== "authenticated" ? 'Register' :
                  data?.user?.email}
          </Link>
        <button type="button" onClick={
            ()=> status==="authenticated"? signOut(): signIn()
            } className="md:bg-green-600 md:text-white p-3 py-1 md:rounded-2xl min-w-fit md:h-fit">
            {
                status === "authenticated"?
                "SignOut": "SignIn"
            }
        </button>
          
    </div>
  )
}

export default Auth