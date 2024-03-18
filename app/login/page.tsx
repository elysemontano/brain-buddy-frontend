"use client"

import {useState, ChangeEvent, FormEvent} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BuddyLogo from '../components/BuddyLogo'
import Link from 'next/link'
import router, { useRouter } from 'next/router';
import { useLoginMutation } from '../../lib/authApi';

interface FormData {
  email: string,
  password: string,
}

export default function LogIn() {

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [loginMutation, { isLoading, isError }] = useLoginMutation();
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Call the login mutation function with the user's credentials
      await loginMutation(formData);
      // Handle success, such as redirecting to a dashboard page
      onSuccess();
    } catch (error) {
      // Handle error, such as displaying an error message
      console.error('Error:', error);
    }
  };

  return (
    <main className="flex justify-center items-center mt-20">
    <div className="w-96 my-shadow bg-[#2B6AD0] text-white text-center rounded-xl p-8 border-2 border-[#2B6AD0]">
      <div className="flex justify-center">
        <BuddyLogo height={70} width={70} />
      </div>
      <h1 className="font-extrabold text-2xl mt-1 mb-6">Log In</h1>
      <form>
          <input id="email" className="mt-6 py-2 px-16 rounded-md text-center text-[#7C7C7C]" type="text" placeholder='Email' name="email" onChange={handleChange} value={formData.email} />
          <input id="password" className="mt-4 py-2 px-16 rounded-md text-center text-[#7C7C7C]" type="password" placeholder='Password' name="password" onChange={handleChange} value={formData.password} />      
          <button className="mt-8 btn border-none text-white bg-[#1F4591] btn-md mb-4 drop-shadow-lg w-36 hover:text-[#1F4591]" onClick={handleSubmit}>Log In</button>
        </form>
    </div> 
  </main>
  )
}
function onSuccess() {
  throw new Error('Function not implemented.')
}

