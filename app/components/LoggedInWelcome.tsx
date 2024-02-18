import React from 'react'
import BuddyLogo from "./BuddyLogo";
import Link from 'next/link'

export default function LoggedInWelcome() {
  return (
    <div className="w-96 my-shadow bg-[#2B6AD0] text-white text-center rounded-xl px-8 py-4 border-2 border-[#2B6AD0]">
      <div className="flex justify-center">
        <BuddyLogo height={70} width={70} />
      </div>
      <h1 className="font-extrabold text-2xl mt-1 mb-6">Brain Buddy</h1>
      <p>Welcome!</p>
      <p className="mt-4 mb-4 px-4">Let’s start with creating a topic for you to study or browse some topics already available!</p>
      <Link href='/dashboard'>      
        <button className="btn border-none text-white bg-[#1F4591] btn-md my-4 drop-shadow-lg w-60 hover:text-[#1F4591]">My Dashboard</button>
      </Link>
      <Link href='/create/topic'>      
        <button className="btn border-none text-white bg-[#1F4591] btn-md my-4 drop-shadow-lg w-60 hover:text-[#1F4591]">Create Topic</button>
      </Link>
    </div> 
  )
}
