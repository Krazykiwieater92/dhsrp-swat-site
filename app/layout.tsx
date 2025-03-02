"use client"; // Ensure this is a Client Component

import React from "react";
import Link from "next/link";
import "./globals.css";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider, useSession } from "next-auth/react"; // Move useSession to a separate component
import UsernameDisplay from "@/components/username-dis";
import AuthGuard from "@/components/AuthGuard"; // New component for authorization
import LoginPage from "./login/page";
import { allowedDiscordIds } from "@/components/allowedDiscordIds";
import SessionWrapper from "@/components/SessionWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <SessionWrapper>
          <AuthGuard>
            <Menubar className="fixed top-0 left-1/2 transform -translate-x-1/2 backdrop-blur border border-gray-300 shadow-lg rounded-md mx-auto items-top justify-center z-50 mb-5">
              <MenubarMenu>
                <MenubarTrigger>
                  <Link href="/">Home</Link>
                </MenubarTrigger>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>
                  <Link href="/sop">Pages</Link>
                </MenubarTrigger>
                <MenubarMenu>
                  <MenubarTrigger>
                    <Link href="/links">Links</Link>
                  </MenubarTrigger>
                </MenubarMenu>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Docs</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link href="https://docs.google.com/document/d/1C2yyHwFWdlzsUhD3iqaYpgxX8WXMYn85G2BAYzcSR9A/edit?tab=t.0">
                      Handbook
                    </Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link href="/sop"> SOP Page</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Rosters</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link href="https://docs.google.com/spreadsheets/d/14PRCeT7nYdkfYrAeEvw5CirqGRilKx6FHf_Yg7FyfkM/edit?gid=557526917#gid=557526917">
                      DHSRP SWAT Roster
                    </Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link href="https://docs.google.com/spreadsheets/d/1HonPA6BsV27hPoffOvm3-YYDxHR0sATyHoqM56xqkqM/edit?gid=0#gid=0">
                      SWAT Uniform/Vehicle Roster
                    </Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Swat Leadership</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link href="/staff/commander">Swat Commander</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link href="/staff/supervisor">Swat Supervisor</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link href="/staff/team-leader-50-david">
                      Swat Team Leader 50-David
                    </Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link href="/staff/team-leader-40-david">
                      Swat Team Leader 40-David
                    </Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link href="/staff/LAPD-Chief">LAPD Chief of Police</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link href="/staff/DHSRP-Overlord">
                      DHSRP Owner/Founder
                    </Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  <Link href="/login">Login</Link>
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
            <Analytics />
            <UsernameDisplay />
            {children}
          </AuthGuard>
          <LoginPageConditionalRender />
        </SessionWrapper>
      </body>
    </html>
  );
}
function LoginPageConditionalRender() {
  const { data: session } = useSession();

  if (!session) {
    return <LoginPage />;
  }
  return null;
}
