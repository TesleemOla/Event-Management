"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import React from 'react'
    
const Auth = () => {
    const { data, status } = useSession()
  
  return (
    <>
    <button type="button" onClick={
        ()=> status==="authenticated"? signOut(): signIn()
    } className="md:bg-blue-600 md:text-white p-2 md:rounded-2xl">
        {
            status === "authenticated"?
            "Sign Out": "Sign In"
        }
    </button>
          <Link href="/user/register" className="md:bg-blue-600 md:text-white p-2 md:rounded-2xl">
        Register
    </Link>
    </>
  )
}

export default Auth