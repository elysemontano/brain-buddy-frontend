"use client"

import LoggedInWelcome from "./components/LoggedInWelcome"
import LoggedOutWelcome from "./components/LoggedOutWelcome"
import { useGetUserQuery } from '../lib/authApi';


export default function Home() {
  const { data: user, isLoading, isError } = useGetUserQuery();



  return (
    <main className="flex justify-center items-center mt-20">
      {!user && (
        <LoggedOutWelcome />
      )}
      {user && (
        <LoggedInWelcome />
      )}
    </main>
  );
}
