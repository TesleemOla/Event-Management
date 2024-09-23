"use client"
import Link from 'next/link'
import React from 'react'
import { Auth } from "./"
import { usePathname } from 'next/navigation'

const Header = () => {
  const route = usePathname()
  
  return (
    <header className="m-4 flex flex-col gap-40 md:flex-row space-between items-center w-full">
        <Link href="/" className="font-bold text-2xl text-center text-blue-600 my-4">
          Planner
        </Link>
        <nav className="flex gap-8 space-around items-center">
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