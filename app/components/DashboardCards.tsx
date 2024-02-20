import React from 'react'
import BuddyLogo from "./BuddyLogo";
import Link from 'next/link';


interface TopicProps {
  topic: {
    name: string,
    description: string
  }
}

export default function DashboardCards({topic}: TopicProps) {
  const urlTopic: string = topic.name.split(" ").join("").toLowerCase();
  
  return (
    <div className="flex flex-col justify-between my-shadow bg-[#2B6AD0] text-white text-center rounded-xl p-4 border-2 border-[#2B6AD0] m-8 hover-animate">
      <div className="flex justify-center">
        <BuddyLogo height={50} width={50} />
      </div>
      <h1 className="font-extrabold text-md mt-1">{topic.name}</h1>
      <p className="px-1 text-xs mt-1">{topic.description}</p>
      <div>
        <Link href={`/practice/${urlTopic}`}>        
          <button className="btn border-none text-white bg-[#1F4591] btn-xs my-4 drop-shadow-lg w-36 hover:text-[#1F4591] mx-1">Practice</button>
        </Link>
        <button className="btn border-none text-white bg-[#1F4591] btn-xs mb-4 drop-shadow-lg w-36 hover:text-[#1F4591] mx-1">Update</button>
      </div>
    </div> 
  )
}
