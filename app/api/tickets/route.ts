import { NextResponse } from 'next/server';
import { connectToDB } from "@/lib/mongodb";
import Ticket from '@/app/(models)/Ticket';

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();
    const ticketData = body;
    const newTicket = await Ticket.create(ticketData);
    return NextResponse.json({ message: "Ticket Created", newTicket }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
