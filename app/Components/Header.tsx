"use client"
import clsx from "clsx"
import Link from 'next/link'
import React, { useState } from 'react'
import { Auth } from "./"
import { usePathname } from 'next/navigation'

const Header = () => {
  const route = usePathname()
  const [openNav, setOpenNav] = useState(false)
  
  return (
    <header className="m-4 container columns-1 md:columns-3 justify-between md:items-center">
        <Link href="/" className="font-bold text-2xl text-blue-600 my-4">
          Planner
        </Link>
        
          <button onClick={()=>setOpenNav(!openNav)}
          className={clsx("md:hidden",)}>
            XXX
          </button>
       
        <nav className={clsx(`grid grid-flow-rows md:grid-rows-2 items-right md:items-center md:space-x-10`,
          !openNav && "hidden md:grid", openNav && 'grid shadow-inner md:shadow-none'
        )}>
            <Link href="/Events">
                Events
            </Link>
            {route === "/Events" && <Link href="Events/createEvent">
              Create Event
            </Link>}
            <Auth />
        
        </nav>
    </header>
  )
}

export default Header