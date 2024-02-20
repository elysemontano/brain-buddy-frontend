"use client"

import { useEffect, useState } from "react";
import BuddyLogo from "@/app/components/BuddyLogo";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link"
import ReactCanvasConfetti from 'react-confetti';
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from '@/lib/store';
import { fetchTopics } from "@/lib/topics/topicsSlice"
import { useParams } from 'next/navigation'

interface Topic {
  name: string;
  cards: {
    question: string;
    answer: string;
  }[];
}

export default function Practice() {
  const params = useParams<{
    topicname: string;
  }>();
  const dispatch = useDispatch<AppDispatch>();
  const topics = useSelector((state: RootState) => state.topics.topics);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0)
  const [windowDimension, setWindowDimension] = useState({width: window.innerWidth, height: window.innerHeight})

  const detectSize = () => {
    setWindowDimension({width: window.innerWidth, height: window.innerHeight})
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize)
    return() => {
      window.removeEventListener("resize", detectSize)
    }
  }, [windowDimension])

  useEffect(() => {
    dispatch(fetchTopics()); // Dispatch action to fetch topic data when component mounts
  }, [dispatch]);



  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    setCurrentCard(currentCard + 1)
  }

  const currentTopic: Topic | undefined = topics.find((topic: Topic) => {
    const formattedTopicName = topic.name.toLowerCase().split(" ").join("");
    return params.topicname.toLowerCase() === formattedTopicName;
  });


  return (
    <main className="flex flex-col justify-center items-center mt-5">
      {currentTopic ? (
        <>
          <h1 className="text-[#7C7C7C] font-extrabold text-4xl pb-8">{currentTopic.name}</h1>
          {currentCard + 1 <= currentTopic.cards.length ? (
            <div className="w-96 perspective h-96">
              <div className={`flip-card ${isFlipped ? 'flip-card-flipped relative' : ''}`} onClick={handleClick}>
                <div className="flip-card-inner relative"> 
      
                  {/* Front Side: */}
                  <div className="bg-[#1F4591] my-shadow text-white text-center border-2 border-[#1F4591] rounded-xl p-8 cursor-pointer absolute h-96 w-96 flex flex-col">
                    <div className="flex justify-center">
                      <BuddyLogo height={70} width={70} />
                    </div>
                    <p className="px-6 font-extrabold text-2xl py-16">
                      {currentTopic.cards[currentCard].question}
                    </p>
                    <div></div>
                  </div> 
      
                  {/* Back Side: */}
                  <div className="flip-card-back my-shadow bg-[#2B6AD0] text-white text-center rounded-xl p-8 border-2 border-[#2B6AD0] drop-shadow-xl cursor-pointer flex flex-col justify-between">
                    <div className="flex justify-center">
                      <BuddyLogo height={70} width={70} />
                    </div>
                    <p className="p-6 font-extrabold text-xl">
                      {currentTopic.cards[currentCard].question}
                    </p>
                    <p className="px-6 font-extralight">{currentTopic.cards[currentCard].answer}</p>              
                    <div>
                      <button className="btn border-none text-white bg-[#1F4591] btn-md my-8 drop-shadow-lg w-60 hover:text-[#1F4591]" onClick={handleNextCard}>Next</button>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          ) : (
            <>     
              <ReactCanvasConfetti width={windowDimension.width} height={windowDimension.height} tweenDuration={100}/>  
              <div className="w-96 my-shadow bg-[#2B6AD0] text-white text-center rounded-xl p-8 border-2 border-[#2B6AD0]">
                <div className="flex justify-center">
                  <BuddyLogo height={70} width={70} />
                </div>
                <h1 className="font-bold text-xl mt-1 mb-2">Hooray <span className="transition ease-in-out">🎉</span> </h1>
                <h1 className="mb-2">You completed this section!</h1>
                <button className="btn border-none text-white bg-[#1F4591] btn-md my-2 drop-shadow-lg w-60 hover:text-[#1F4591]" onClick={() => setCurrentCard(0)}>
                  Repeat Section
                </button>
                <Link href="/dashboard">
                  <button className="btn border-none text-white bg-[#1F4591] btn-md mt-2 mb-6 drop-shadow-lg w-60 hover:text-[#1F4591]">
                    Back to Dashboard
                  </button>
                </Link>
              </div> 
            </>
          )}
        </>
      ) : (
        <p>Loading...</p> // Or any loading indicator
      )}
    </main>
  );
  
}
