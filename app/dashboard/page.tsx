'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import DashboardCards from '../components/DashboardCards';
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
import { AppDispatch, RootState } from '@/lib/store';
import { fetchTopics } from '../../lib/topics/topicsSlice';

export default function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const topics = useSelector((state: RootState) => state.topics.topics);

  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

  return (
    <div> {/* Add a parent container if needed */}
      <h1 className='text-[#7C7C7C] font-bold underline px-2 text-2xl'>My Cards:</h1>
      <div className='grid xl:grid-cols-5 lg:grid-cols-4 gap-1 md:grid-cols-3 sm:grid-cols-2 xs:grid-flow-col'>
        {topics.map((topic: { name: string; description: string }, index: React.Key | null | undefined) => {
          return <DashboardCards key={index} topic={topic} />;
        })}
        <div className='flex items-center'>
          <Link href="/create/topic">
            <div className='bg-[#CDCDCD] text-[#7C7C7C] h-14 w-14 flex justify-center items-center rounded-lg mx-8 hover-animate hover:bg-[#1F4591] hover:text-[#CDCDCD] shadow-[5px_5px_5px_2px_rgba(0,0,0,0.3)]'>
              <FaPlus size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
