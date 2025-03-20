import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Ticket from "@/app/[models]/Ticket";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/config/auth"; // Correct import path

// Create a new ticket
export async function POST(req: Request) {
  try {
    await connectToDB();
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Access the accessToken from the session
    const accessToken = session?.user?.accessToken;

    console.log("accessToken:", accessToken);

    if (!accessToken) {
      return NextResponse.json(
        { message: "Access token not found in session" },
        { status: 400 }
      );
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
  console.log("🔥 API /api/ticket was hit!"); // Add this at the top
  try {
    await connectToDB();
    console.log("✅ Connected to DB!");
    const session = await getServerSession(authOptions);

    console.log("🔥 Session Data:", session); // 🔥 Check session data

    // Access the accessToken from the session
    const accessToken = session?.user?.accessToken;

    console.log("accessToken:", accessToken);

    const userId = session?.user?.name; // Get user ID from session

    const tickets = await Ticket.find({ userId }).sort({ createdAt: -1 });

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { message: "Error fetching tickets", error },
      { status: 500 }
    );
  }
}
