import React from 'react'
import BuddyLogo from "../../../components/BuddyLogo";
import Link from 'next/link'

export default function CreateCard() {
  return (
    <main className="flex justify-center items-center mt-20">
      <div className="w-96 my-shadow bg-[#2B6AD0] text-white text-center rounded-xl p-8 border-2 border-[#2B6AD0]">
        <div className="flex justify-center">
          <BuddyLogo height={70} width={70} />
        </div>
        <h1 className="font-extrabold text-2xl mt-1 mb-2">Topic</h1>
        <p>Card 1:</p>
        <form>
          <input className="mt-6 py-2 px-16 rounded-md text-center" type="text" placeholder='Question?' />
          <input className="mt-6 py-2 px-16 rounded-md text-center" type="text" placeholder='Answer?' />     
          <button className="mr-4 mt-8 btn border-none text-white bg-[#1F4591] btn-md mb-4 drop-shadow-lg w-36 hover:text-[#1F4591]" type="submit" >
            <Link href='/dashboard'>Finish Topic</Link>
          </button>
          <Link href={`/create/topic/card`}>          
            <button className="mt-8 btn border-none text-white bg-[#1F4591] btn-md mb-4 drop-shadow-lg w-36 hover:text-[#1F4591]" type="submit">Next Card</button>
          </Link>
        </form>
      </div> 
    </main>
  )
}
