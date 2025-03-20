import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/config/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  console.log("🔥 Session Test:", session);
  return NextResponse.json({ session });
}
