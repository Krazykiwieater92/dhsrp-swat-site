import { authOptions } from "./config/auth"; // Correct import path
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
