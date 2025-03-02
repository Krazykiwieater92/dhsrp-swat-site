"use client"; // Ensure this is a Client Component

import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome, {session.user?.name}!</h1>
      <p>You have successfully logged in with your Discord account.</p>
    </div>
  );
}
