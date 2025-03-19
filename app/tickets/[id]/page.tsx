import Ticket from "@/app/[models]/Ticket";
import { connectToDB } from "@/lib/mongodb";
import { notFound } from "next/navigation";
import { ObjectId } from "mongodb";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CalendarDays, Clock, FileText, Tag, User } from "lucide-react";

interface Ticket {
  _id: string;
  title: string;
  description: string;
  category:
    | "Team Leader Application"
    | "Supervisor Application"
    | "Case Notes"
    | "Recommendation"
    | "Staff Application";
  priority: number;
  progress: number;
  status: "not started" | "in progress" | "done";
  username: string;
  createdAt: string;
  updatedAt: string;
  viewed: boolean;
}

type LeanTicket = Omit<Ticket, "_id"> & { _id: ObjectId; __v: number };

// Generate static params
export async function generateStaticParams() {
  await connectToDB();
  // Find all tickets
  const tickets = (await Ticket.find({}).lean()) as LeanTicket[];

  //fetch and map the tickets
  return tickets.map((ticket) => ({
    id: ticket._id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let ticket: LeanTicket | null = null; // Changed to LeanTicket

  try {
    await connectToDB();
    //all of this is ai mishmash, god luck understanding it if it has a bug ;)
    if (!ObjectId.isValid(id)) return notFound();
    ticket = (await Ticket.findOne({
      _id: new ObjectId(id),
    }).lean()) as LeanTicket; // Added type assertion
    if (!ticket) return notFound();
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return (
      <div className="text-center text-red-500">
        Something went wrong. Please try again.
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    return (
      {
        "not started": "bg-yellow-500/20 text-yellow-500 border-yellow-500/50",
        "in progress": "bg-blue-500/20 text-blue-500 border-blue-500/50",
        done: "bg-green-500/20 text-green-500 border-green-500/50",
      }[status] || "bg-gray-500/20 text-gray-500 border-gray-500/50"
    );
  };

  const getCategoryColor = (category: string) => {
    return (
      {
        "Team Leader Application":
          "bg-purple-500/20 text-purple-500 border-purple-500/50",
        "Supervisor Application":
          "bg-indigo-500/20 text-indigo-500 border-indigo-500/50",
        "Case Notes": "bg-cyan-500/20 text-cyan-500 border-cyan-500/50",
        Recommendation: "bg-pink-500/20 text-pink-500 border-pink-500/50",
      }[category] || "bg-gray-500/20 text-gray-500 border-gray-500/50"
    );
  };

  return (
    <div className="container mx-auto mt-20 max-w-4xl py-10">
      <Card className="border border-zinc-800 bg-zinc-900/60 backdrop-blur shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className={getCategoryColor(ticket.category)}
              >
                {ticket.category}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              {ticket.title}
            </h1>
          </div>
        </CardHeader>

        <Separator className="bg-zinc-800" />

        <CardContent className="pt-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-zinc-400">
              <User size={16} className="text-zinc-500" />
              <span>Created by:</span>
              <span className="font-medium text-zinc-200">
                {ticket.username || "Unknown"}
              </span>
            </div>

            <div className="bg-zinc-800/60 rounded-lg p-5 border border-zinc-700">
              <h3 className="text-sm font-medium text-zinc-400 mb-2 flex items-center gap-2">
                <FileText size={16} /> Description
              </h3>
              <p className="text-zinc-200 whitespace-pre-wrap">
                {ticket.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-800/40 rounded-lg p-4 border border-zinc-700/50">
                <div className="flex items-center gap-2 text-zinc-400 mb-1">
                  <Tag size={16} /> <span className="text-sm">Status</span>
                </div>
                <Badge
                  variant="outline"
                  className={getStatusColor(ticket.status)}
                >
                  {ticket.status}
                </Badge>
              </div>

              <div className="bg-zinc-800/40 rounded-lg p-4 border border-zinc-700/50">
                <div className="flex items-center gap-2 text-zinc-400 mb-1">
                  <CalendarDays size={16} />{" "}
                  <span className="text-sm">Created</span>
                </div>
                <p className="text-zinc-200">
                  {new Date(ticket.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-2 pb-6">
          <Link href="/tickets/my-tickets" className="w-full">
            <Button
              variant="outline"
              className="w-full bg-zinc-800/60 border-zinc-700 hover:bg-zinc-700 hover:text-zinc-100 hover:border-zinc-500"
            >
              Back to My Tickets
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
