"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import React from 'react'
    
const Auth = () => {
    const { status } = useSession()
  return (
    <>
    <button type="button" onClick={
        ()=> status==="authenticated"? signOut(): signIn()
    }>
        {
            status === "authenticated"?
            "Sign Out": "Sign In"
        }
    </button>
    <button>
        Register
    </button>
    </>
  )
}

export default Auth