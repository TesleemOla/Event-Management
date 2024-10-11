"use client"
import clsx from "clsx"
import Link from 'next/link'
import React, { useState } from 'react'
import { Auth } from "./"
import { usePathname } from 'next/navigation'
import Burger from "./icons/burger"

const Header = () => {
  const route = usePathname()
  const [openNav, setOpenNav] = useState(false)
  
  return (
    <header className="flex flex-col m-4 container md:flex-row justify-between md:items-center">
        <Link href="/" className="font-bold text-2xl text-blue-600 my-4">
          Planner
        </Link>
        
          <button onClick={()=>setOpenNav(!openNav)}
          className={clsx("md:hidden")}>
            <Burger />
          </button>
       
      <nav className={clsx(`flex flex-col gap-4 items-start w-1/2 md:items-center md:w-auto md:flex-row md:gap-10`,
          !openNav && "hidden md:flex", openNav && 'flex'
        )}>
            <Link href="/Events" className="font-bold text-xl">
                Events
            </Link>
            {route === "/Events" && <Link href="Events/createEvent" className=" font-bold text-xl">
              Create Event
            </Link>}
            <Auth />
        
        </nav>
    </header>
  )
}

export default Header