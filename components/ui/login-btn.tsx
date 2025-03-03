"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
          
        </>
      ) : (
        <button onClick={() => signIn("discord")}>Sign In with Discord</button>
      )}
    </div>
  );
}
import UsernameDisplay from "../username-dis";

<UsernameDisplay />;
