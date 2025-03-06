import mongoose, { Schema } from "mongoose";

const ticketSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["not started", "in progress", "done"],
      default: "not started",
    },
    category: {
      type: String,
      enum: ["Staff Application", "Recommendation"],
      reuired: true,
    },
    progress: { type: Number },
    active: { type: Boolean },
  },
  { timestamps: true }
);
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
