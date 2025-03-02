"use client";
import { useSession } from "next-auth/react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { signOut } from "next-auth/react";
export default function UsernameDisplay() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null; // Don't render anything while loading
  }

  if (!session) {
    return null; // Don't render anything if not logged in
  }

  const handleClick = () => {
    // Add your desired functionality here, for example:
    console.log("Username clicked");
  };

  return (
    <div className="fixed top-4 right-4">
      <Menu>
        <MenuButton
          onClick={handleClick}
          className="text-white font-bold bg-transparent border-none cursor-pointer m-4 mr-10"
        >
          {session.user?.name}
        </MenuButton>
        <MenuItems anchor="bottom">
          <MenuItem>
            <button className="block data-[focus]:bg-blue-100" onClick={() => signOut()}>
              Sign Out
            </button>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/support">
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/license">
              License
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
