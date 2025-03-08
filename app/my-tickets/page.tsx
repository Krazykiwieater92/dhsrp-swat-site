import { Badge } from "@/components/ui/badge";
import { getServerSession } from "next-auth";

const getTickets = async (): Promise<{ tickets: Ticket[] }> => {
  try {
    const res = await fetch("https://dhsrp-swat-site.vercel.app/api/tickets", {
      cache: "no-store",
    });
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
  category: "Staff/Command Application" | "Recommendation";
  priority: number;
  progress: number;
  status: "not started" | "in progress" | "done";
  username: string;
  createdAt: string;
}
interface User {
  name: string;
  email: string;
  image: string;
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}

export default async function Page() {
  const { tickets } = await getTickets();

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
              <h3 className="font-bold text-2xl">
                {truncateText(ticket.title, 20)}
                <Badge className="ml-2 bg-blue-800">New</Badge>
              </h3>
              <h2>Created by: </h2>
              <div className="mt-2 rounded-lg bg-zinc-900/60 backdrop-blur p-2">
                <p>Description: {ticket.description}</p>
                <p>Category: {ticket.category}</p>
                <p>Status: {ticket.status}</p>
                <p>Created on: {new Date(ticket.createdAt).toLocaleString()}</p>
                <p className="text-zinc-600">Ticket Id: {ticket._id}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
