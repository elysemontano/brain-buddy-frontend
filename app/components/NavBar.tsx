import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  const user = {email: "test@testing.com"}
  // const user = ''
  return (
    <nav className="flex flex-row navbar bg-base-100 justify-between">
      <Link href='/'>      
        <Image 
          src="/images/brain-buddy-header.png"
          width={100}
          height={100}
          alt="Brain Buddy"
          priority={true}
          className='hover-animate'
        />
      </Link>
      {!user && (
        <ul className='flex flex-row text-[#26ACE2] font-bold'>
          <Link href='/login'>
            <li className='mx-4 hover-animate'>Login</li>
          </Link>
          <Link href='/signup'>            
            <li className='mx-4 hover-animate'>Sign up</li>
          </Link>
        </ul>
      )}
      {user && (
        <ul className='flex flex-row text-[#26ACE2] font-bold'>
          <Link href='/dashboard'>          
            <li className='mx-4 hover-animate'>My Dashboard</li>
          </Link>
          <Link href='/create/topic'>          
            <li className='mx-4 hover-animate'>Create</li>
          </Link>
          <Link href='/'>          
            <li className='mx-4 hover-animate'>Sign Out</li>
          </Link>
        </ul>
      )}
    </nav>
  )
}
