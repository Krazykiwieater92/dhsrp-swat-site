import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import Link from "next/link";

const getTickets = async (): Promise<{ tickets: Ticket[] }> => {
  try {
    const res = await fetch(
      "https://dhsrp-swat-site.vercel.app/api/tickets",
      {}
    );
    return res.json();
  } catch (error) {
    console.error("Failed to fetch tickets", error);
    return { tickets: [] }; // Ensure a valid return type
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
  username: string; // this should now contain the username of the creator of the ticket.
  createdAt: string;
  viewed: boolean;
}
interface User {
  name: string;
  email: string;
  image: string;
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
  const { tickets } = await getTickets();
  console.log("Fetched tickets!");
  const uniqueCategories: string[] = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="block content-start">
      <h1 className="text-center mt-20 text-4xl font-bold ">My Tickets</h1>
      <div className="grid grid-cols-4 gap-4 mt-40 mx-3">
        {tickets.length > 0 &&
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

              {/* Display the ticket's username */}
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
          ))}
      </div>
    </div>
  );
}
