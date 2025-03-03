import NextAuth from "next-auth";
import { Profile, Session, User, Account } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

interface MyDiscordProfile extends Profile {
  id: string;
  username?: string;
  global_name?: string;
}

const ALLOWED_DISCORD_IDS = ["324173086565990402"];

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({
      account,
      profile,
    }: {
      user: User;
      account: Account | null;
      profile?: Profile | undefined;
    }) {
      console.log("profile: ", profile); // Keep this for debugging
      if (account?.provider === "discord" && profile) {
        const discordProfile = profile as MyDiscordProfile; // Add this line. type assertion.
        if (discordProfile.id) {
          // Change all profile.id to discordProfile.id
          if (ALLOWED_DISCORD_IDS.includes(discordProfile.id)) {
            // Change all profile.id to discordProfile.id
            console.log(`User with ID ${discordProfile.id} is allowed.`); // Change all profile.id to discordProfile.id
            return true; // Allow sign-in
          } else {
            console.error(`User with ID ${discordProfile.id} is NOT allowed.`); // Change all profile.id to discordProfile.id
            return false; // Reject sign-in
          }
        }
        console.error("User profile id is undefined.");
        return false; //reject sign in if user data is not found.
      }
      console.error("Provider is not discord or profile is undefined.");
      return false; // Reject sign-in for other providers (if any)
    },
    async session({ session, token }: { session: Session; token: any }) {
      if (session.user) {
        const user = session.user as User & { id?: string };
        if (token.id) {
          //CHANGED FROM token.sub to token.id
          user.id = token.id; //CHANGED FROM token.sub to token.id
        }
      }
      return session;
    },
    async jwt({
      token,
      profile,
    }: {
      token: any;
      profile?: Profile | undefined;
    }) {
      const discordProfile = profile as MyDiscordProfile | undefined; // Changed type, and added assertion
      if (discordProfile) token.id = discordProfile.id; // Changed from profile to discordProfile
      return token;
    },
  },
};

export const handler = NextAuth(authOptions);

export const { signIn, signOut, auth } = handler;
