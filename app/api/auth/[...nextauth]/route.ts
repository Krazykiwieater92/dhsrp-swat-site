// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/auth"; // Import the auth configuration
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions); // Handle the authentication request
};

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions); // Handle the POST request for sign-in
};
