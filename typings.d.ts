export type temp = {};

declare module "next-auth" {
  interface User {
    discordId: string;
  }
}
