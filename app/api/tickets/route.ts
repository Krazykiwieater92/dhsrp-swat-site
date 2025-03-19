import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Ticket from "@/app/[models]/Ticket";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth"; // Adjust path if needed

// Create a new ticket
export async function POST(req: Request) {
  try {
    await connectToDB();
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const ticketData = {
      ...body,
      userId: session?.user?.name, // Attach user ID from session
    };

    const newTicket = await Ticket.create(ticketData);

    return NextResponse.json(
      { message: "Ticket Created", newTicket },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// Get only tickets belonging to the logged-in user
export async function GET(req: Request) {
  try {
    await connectToDB();
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = session?.user?.name; // Get user ID from session

    const tickets = await Ticket.find({ userId }).sort({ createdAt: -1 });

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching tickets", error },
      { status: 500 }
    );
  }
}
