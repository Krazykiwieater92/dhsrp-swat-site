"use client";
import { AiOutlineDiscord } from "react-icons/ai";
import { signIn } from "next-auth/react";

export function DiscordAuth() {
  return (
    <button
      onClick={() =>
        signIn("discord", {
          callbackUrl: "/",
        })
      }
      className="px-4 py-2 w-[60%] mx-auto mt-[6%] rounded-md border border-slate-400 backdrop-blur bg-slate-900/60 text-slate-200 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md flex items-center justify-center space-x-2"
    >
      <AiOutlineDiscord className="text-xl" />
      <span>Login with Discord</span>
    </button>
  );
}
