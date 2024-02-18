"use client"

import LoggedInWelcome from "./components/LoggedInWelcome"
import LoggedOutWelcome from "./components/LoggedOutWelcome"


export default function Home() {
  const user = {email: "test@testing.com"}
  // const user = ''

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
