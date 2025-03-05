import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  role: "user" | "admin";
  name?: string; // New: Add name field
  image?: string; // New: Add image field
  discordId?: string; // new field for discord user
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  name: { type: String },
  image: { type: String },
  discordId: { type: String },
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
