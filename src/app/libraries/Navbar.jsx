import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <ul className='flex justify-between texl-xl capitalize px-5 fixed space-x-0 h-[50px] bg-sky-800 text-white items-center'>
            <Link href='/'> 
            <li>All</li>
            </Link>

            <Link href='/libraries/Africa'> 
            <li>Africa</li>
            </Link>

            <Link href='/libraries/Asia'> 
            <li>Asia</li>
            </Link>

            <Link href='/libraries/Americas'> 
            <li>Americas</li>
            </Link>

  

            <Link href='/libraries/europe'> 
            <li>Europe</li>
            </Link>

            <Link href='/libraries/Oceania'> 
            <li>Oceania</li>
            </Link>

            <Link href='/libraries/Antarctica'> 
            <li>Antarctica</li>
            </Link>
        </ul>
    </nav>
  )
}
