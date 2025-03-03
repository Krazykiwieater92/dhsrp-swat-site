"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { DiscordAuth } from "@/app/login/discordauth";

export default function UsernameDisplay() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null; // Don't render anything while loading
  }

  if (!session) {
    return <DiscordAuth />; // Don't render anything if not logged in
  }

  const handleClick = () => {
    // Add your desired functionality here, for example:
    console.log("Username clicked");
  };

  return (
    <div className="fixed top-3 right-4">
      <Dropdown className="bg-gray-900/60 backdrop-blur rounded-lg mx-auto ">
        <DropdownTrigger>
          <Button
            variant="shadow"
            onClick={handleClick}
            className="text-white rounded-lg font-bold bg-gray-900 border-none cursor-pointer m-4 mr-10"
          >
            {session.user?.name}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            key="signout"
            onClick={() => signOut()}
            className="text-red-500 hover:text-red-700 hover:bg-gray-600 rounded-lg"
          >
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
