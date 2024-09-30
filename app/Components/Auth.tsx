"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import React from 'react'
    
const Auth = () => {
    const { data, status } = useSession()
   
  return (
    <div className="contents">
          <Link href={
              status !== "authenticated" ? "/user/register" :
                  "#"}
              className="font-bold md:bg-red-600 md:text-white md:rounded-lg md:h-fit md:p-2">
              {status !== "authenticated" ? 'Register' :
                  data?.user?.email}
          </Link>
        <button type="button" onClick={
            ()=> status==="authenticated"? signOut(): signIn()
            } className="font-bold bg-green-600 text-white w-10 p-2 py-1 md:rounded-lg min-w-fit md:h-fit md:p-2">
            {
                status === "authenticated"?
                "Sign Out": "Sign In"
            }
        </button>
          
    </div>
  )
}

export default Auth