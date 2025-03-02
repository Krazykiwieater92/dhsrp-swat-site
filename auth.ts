// lib/auth.ts
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import clientPromise from "@/lib/db";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
      authorization: `https://discord.com/api/oauth2/authorize?scope=${encodeURIComponent(
        "identify"
      )}`,
      profile: (profile) => {
        profile.discordid = profile.id;
        if (profile.avatar === null) {
          const defaultAvatarNumber =
            Number(BigInt(profile.id) >> BigInt(22)) % 6;
          profile.image = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
        } else {
          const format = profile.avatar.startsWith("a_") ? "gif" : "png";
          profile.image = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
        }
        return {
          ...profile,
          name: profile.global_name ?? profile.username,
          email: profile.email,
          image: profile.image,
          discordId: profile.id,
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to the success page after login
      if (url.startsWith(baseUrl)) {
        return `${baseUrl}/login-success`;
      } else if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }
      return baseUrl;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      // Add custom properties to the session object
      session.user.discordId = user.discordId;
      return session;
    },
    async jwt({ token, user }: { token: any; user: any }) {
      // Add custom properties to the token object
      if (user) {
        token.discordId = user.discordId;
      }
      return token;
    },
  },
};
