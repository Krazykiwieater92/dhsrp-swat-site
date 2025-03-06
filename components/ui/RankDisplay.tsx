"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Badge } from "./badge";

interface User {
  email: string;
  rank?: string;
}

const RANK_COLORS: { [key: string]: string } = {
  Commander: "bg-red-600",
  Supervisor: "bg-orange-600",
  Trainee: "bg-zinc-500",
  "Team Leader": "bg-yellow-600",
  Member: "bg-green-600",
  "DHSRP Overlord": "bg-purple-600",
  "LAPD Chief": "bg-blue-600",
  default: "bg-gray-600",
};

export default function RankDisplay() {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!session?.user?.email) {
        console.warn(
          "RankDisplay: User email not found in session. Cannot fetch user rank."
        );
        setError("No user found");
        return;
      }

      try {
        const response = await fetch(`/api/user/rank?email=${session.user.email}`);

        if (!response.ok) {
          console.error(
            `RankDisplay: User with email ${session.user.email} not found in database.`
          );
          setError("User not found");
          return;
        }
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (dbError) {
        console.error(
          "RankDisplay: Error fetching user from database:",
          dbError
        );
        setError("Database Error");
      }
    };

    fetchUser();
  }, [session?.user?.email]);

  if (!session?.user) {
    return <></>;
  }
  if (error) {
    return <Badge className="bg-red-600">Error: {error}</Badge>;
  }

  const rank = user?.rank || "default";
  const badgeColor = RANK_COLORS[rank] || RANK_COLORS.default;

  return (
    <>
      <Badge className={badgeColor}>{rank}</Badge>
    </>
  );
}
