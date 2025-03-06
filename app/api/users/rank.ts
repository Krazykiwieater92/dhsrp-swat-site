// pages/api/user/rank.ts
import { connectToDB } from "@/lib/mongodb";
import NewUser from "@/app/[models]/Users";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { email } = req.query;
    if (!email || typeof email !== "string") {
      return res.status(400).json({ message: "Email is required" });
    }
    try {
      await connectToDB();
      const user = await NewUser.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ rank: user.rank });
    } catch (error) {
      console.error("Error fetching user rank:", error);
      return res.status(500).json({ message: "Database error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}
