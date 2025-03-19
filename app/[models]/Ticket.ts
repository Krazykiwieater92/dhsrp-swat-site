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
    username: {
      type: String,
      reuired: true,
    },
    category: {
      type: String,
      enum: [
        "Team Leader Application",
        "Supervisor Application",
        "Case Notes",
        "Recommendation",
      ],
      required: true, // <--- Corrected: 'required'
    },
    progress: { type: Number, default: 0 }, //added default value.
    active: { type: Boolean, default: false }, // added default value
    viewed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
