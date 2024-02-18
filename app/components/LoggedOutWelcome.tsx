"use client"

import { useState } from "react";
import BuddyLogo from "./BuddyLogo";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link"

export default function LoggedOutWelcome() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <div className="w-96 perspective">
        <div className={`flip-card ${isFlipped ? 'flip-card-flipped relative' : ''}`} onClick={handleClick}>
          <div className="flip-card-inner relative">


          {/* Front Side: */}
            <div className="bg-[#1F4591] my-shadow text-white text-center border-2 border-[#1F4591] rounded-xl p-8 cursor-pointer absolute">
              <div className="flex justify-center">
                <BuddyLogo height={70} width={70} />
              </div>
              <h1 className="font-extrabold text-2xl mt-1 mb-2">Brain Buddy</h1>
              <p className="p-6">
                Brain Buddy is the ultimate companion for your learning journey!
                Revolutionize the way you study and retain information with our
                cutting-edge flashcard application. Whether you're a student,
                professional, or lifelong learner, Brain Buddy adapts to your unique
                learning style.
              </p>
              <div className="flex justify-center mt-4">
                <div className="flex items-center animate-bounce border-2 rounded-full p-2">
                  <FaArrowLeft />
                </div>
              </div>
            </div>


            {/* Back Side: */}
            <div className="flip-card-back my-shadow bg-[#2B6AD0] text-white text-center rounded-xl p-8 border-2 border-[#2B6AD0] drop-shadow-xl cursor-pointer ">
              <div className="flex justify-center">
                <BuddyLogo height={70} width={70} />
              </div>
              <h1 className="font-extrabold text-2xl mt-1 mb-6">Brain Buddy</h1>
              <p>Let's get started!</p>
              <p className="mt-8 px-4">Create an account and you have full access to creating your own flashcards!</p>
              <Link href="/signup">              
                <button className="btn border-none text-white bg-[#1F4591] btn-md my-8 drop-shadow-lg w-60 hover:text-[#1F4591]">Sign Up</button>
              </Link>
              <div className="flex justify-center">
                <div className="flex items-center animate-bounce border-2 rounded-full p-2">
                  <FaArrowRight />
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  )
}
