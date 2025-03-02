import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: { params: { scope: "identify email" } }, // Ensure we request user ID
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      console.log("Account object:", account); // Log the account
      console.log("Profile object:", profile); // Log the profile (contains Discord ID)

      if (account && profile) {
        token.id = profile.id; // Store Discord ID in token
      }
      return token;
    },
    async session({ session, token }) {
      console.log("JWT Token before session:", token); // Debug log

      if (session.user) {
        session.user.id = token.discordId; // Attach Discord ID to session
      }

      console.log("Session after update:", session); // Debug log
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
