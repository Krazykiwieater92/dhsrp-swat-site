"use server";

import { connectToDB } from "@/lib/mongodb";
import Ticket from "@/app/[models]/Ticket";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export async function updateTicketStatus(ticketId: string, status: string) {
  try {
    await connectToDB();

    // Validate the status
    if (!["pending", "accepted", "denied"].includes(status)) {
      throw new Error("Invalid status value");
    }

    // Update the ticket in the database
    const result = await Ticket.findByIdAndUpdate(
      new ObjectId(ticketId),
      {
        status,
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!result) {
      throw new Error("Ticket not found");
    }

    // Revalidate the page to show the updated data
    revalidatePath(`/tickets/${ticketId}`);

    return { success: true };
  } catch (error) {
    console.error("Error updating ticket status:", error);
    throw new Error("Failed to update ticket status");
  }
}
