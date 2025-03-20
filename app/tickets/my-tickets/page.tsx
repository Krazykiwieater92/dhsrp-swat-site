import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/config/auth";

const getTickets = async (
  session: any
): Promise<{ tickets: Ticket[] } | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/tickets`);

    console.log("Session in Page:", session);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch tickets", error);
    return undefined;
  }
};

interface Ticket {
  _id: string;
  title: string;
  description: string;
  category:
    | "Team Leader Application"
    | "Supervisor Application"
    | "Case Notes"
    | "Recommendation";
  priority: number;
  progress: number;
  status: "not started" | "in progress" | "done";
  username: string;
  createdAt: string;
  viewed: boolean;
}

function getCategoryColor(category: string) {
  switch (category) {
    case "Team Leader Application":
      return "bg-purple-500/20 text-purple-500 border-purple-500/50";
    case "Supervisor Application":
      return "bg-indigo-500/20 text-indigo-500 border-indigo-500/50";
    case "Case Notes":
      return "bg-cyan-500/20 text-cyan-500 border-cyan-500/50";
    case "Recommendation":
      return "bg-pink-500/20 text-pink-500 border-pink-500/50";
    case "Staff Application":
      return "bg-red-500/20 text-red-500 border-red-500/50";
    default:
      return "bg-gray-500/20 text-gray-500 border-gray-500/50";
  }
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}

export default async function Page() {
  const session = await getServerSession(authOptions); // Get the session

  if (!session) {
    return <div>You must be logged in to view this page.</div>;
  }

  const data = await getTickets(session); // Pass the session to getTickets
  const tickets = data?.tickets;

  console.log("Fetched tickets!");

  return (
    <div className="block content-start">
      <h1 className="text-center mt-20 text-4xl font-bold ">My Tickets</h1>
      <div className="grid grid-cols-4 gap-4 mt-40 mx-3">
        {tickets && tickets.length > 0 ? (
          tickets.map((ticket) => (
            <div
              key={ticket._id}
              className="border border-zinc-700 rounded-xl p-4 bg-zinc-850/60"
            >
              <Link href={`/tickets/${String(ticket._id)}`}>
                <h3 className="font-bold text-2xl">
                  {truncateText(ticket.title, 20)}
                </h3>
              </Link>
              <h2>Created by: {ticket.username || "Unknown"} </h2>
              <div className="mt-2 rounded-lg bg-zinc-900/60 backdrop-blur p-2">
                <p className=" text-xl font-bold">
                  Description: {truncateText(ticket.description, 20)}
                </p>
                <Separator />
                <p>
                  Category:{" "}
                  <Badge
                    variant="outline"
                    className={getCategoryColor(ticket.category)}
                  >
                    {ticket.category}
                  </Badge>
                </p>
                <p>Status: {ticket.status}</p>
                <p>Created on: {new Date(ticket.createdAt).toLocaleString()}</p>
                <p className="text-zinc-600">Ticket Id: {String(ticket._id)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No tickets found.</p>
        )}
      </div>
    </div>
  );
}
