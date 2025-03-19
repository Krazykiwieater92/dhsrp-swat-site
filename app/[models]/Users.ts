import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    createdAt: { type: Date, default: Date.now },

    email: { type: String, required: true },
    username: {
      type: String, // New field to store the Discord username
      required: [true, "Username is required!"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    rank: {
      type: String,
      enum: [
        "Commander",
        "Supervisor",
        "Team Leader",
        "Member",
        "Probationary Member",
        "Trainee",
      ],
      default: "Trainee",
    },
  },
  { timestamps: true }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
