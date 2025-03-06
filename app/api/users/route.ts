import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import User from "@/app/[models]/Users";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();
    const userData = body;
    const newUser = await User.create(userData);
    return NextResponse.json(
      { message: "User Created", newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const users = await User.find().sort({ createdAt: -1 });
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching tickets", error },
      { status: 500 }
    );
  }
}
