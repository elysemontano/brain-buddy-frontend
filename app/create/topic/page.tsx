"use client"

import {useState, ChangeEvent, FormEvent} from 'react'
import BuddyLogo from "../../components/BuddyLogo";
import router, { useRouter } from 'next/router';
import Link from 'next/link'

interface FormData {
  topic: string,
  description: string
}

export default function CreateTopic() {
  const [formData, setFormData] = useState<FormData>({
    topic: '',
    description: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="flex justify-center items-center mt-20">
      <div className={`w-96 my-shadow bg-[#2B6AD0] text-white text-center rounded-xl p-8 border-2 border-[#2B6AD0] transform-style-3d transition-transform-0.5s transform-rotateY-180deg`}>
        <div className="flex justify-center">
          <BuddyLogo height={70} width={70} />
        </div>
        <h1 className="font-extrabold text-2xl mt-1 mb-2">Brain Buddy</h1>
        <form>
          <input id="topic" className="mt-6 py-2 px-16 rounded-md text-center text-[#7C7C7C]" type="text" placeholder='What is the topic?' name="topic" onChange={handleChange} value={formData.topic} />
          <input id="description" className="mt-4 py-8 px-16 rounded-md text-center text-[#7C7C7C]" type="text" placeholder='Description?' name="description" onChange={handleChange} value={formData.description} />       
          <button className="mt-8 w-36 btn border-none text-white bg-[#1F4591] btn-md mb-4 drop-shadow-lg hover:text-[#1F4591]" >Next
            {formData.topic && (
              <Link href={`/create/${formData.topic}/card`} className=" text-white hover:text-[#1F4591]"></Link>
            )}
          </button>
        </form>
      </div> 
    </main>
  )
}
