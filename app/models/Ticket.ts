import mongoose, { Schema, Document } from "mongoose";

export interface ITicket extends Document {
  title: string;
  description: string;
  status: "open" | "in-progress" | "closed";
  user: mongoose.Types.ObjectId | string; // Modified: Allow string type
  createdAt: Date;
}

const TicketSchema = new Schema<ITicket>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["open", "in-progress", "closed"],
      default: "open",
    },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Ticket ||
  mongoose.model<ITicket>("Ticket", TicketSchema);
