import React from 'react'
import DashboardCards from '../components/DashboardCards'
import { FaPlus } from "react-icons/fa";
import Link from 'next/link'


export default function Dashboard() {
  const myTopics = [
    {
      name: "JavaScript Intro",
      description: "Begin your journey in JavaScript with data types, variables and built in methods"
    },
    {
      name: "JavaScript Foundations",
      description: "Stretching your understanding of JavaScript with concepts like conditionals and arrays"
    },
  ]
  return (
    <>
      <h1 className='text-[#7C7C7C] font-bold underline px-2 text-2xl'>My Cards:</h1>
      <div  className='flex items-center'>
          {myTopics?.map((topic, index) => {
            return <DashboardCards topic={topic} />
          })}
        <Link href="/create/topic">
          <div className='bg-[#CDCDCD] text-[#7C7C7C] h-14 w-14 flex justify-center items-center rounded-lg mx-8 hover-animate hover:bg-[#1F4591] hover:text-[#CDCDCD] shadow-[5px_5px_5px_2px_rgba(0,0,0,0.3)]'>
            <FaPlus size={24} />
          </div>
        </Link>
      </div>
    </>
  )
}
