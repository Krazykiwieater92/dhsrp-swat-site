"use client"; // Mark this as a client-side component

import { useSession } from "next-auth/react";
import { allowedDiscordIds } from "./allowedDiscordIds"; // Your list of allowed Discord IDs

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>; // Show loading message
  }

  // Check if session exists and user is authorized based only on Discord ID
  const isAuthorized =
    session?.user?.discordId &&
    allowedDiscordIds.includes(session.user.discordId);

  if (!isAuthorized) {
    return <p>Access Denied. Please log in.</p>;
  }

  return <>{children}</>;
}
