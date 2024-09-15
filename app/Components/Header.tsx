import Link from 'next/link'
import React from 'react'
import { Auth } from "./"

const Header = () => {
  return (
    <header>
        <Link href="/">
            Logo
        </Link>
        <nav>
            <Link href="/Events">
                Events
            </Link>
            <Auth />
        
        </nav>
    </header>
  )
}

export default Header