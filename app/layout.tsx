import React from "react";
import { getServerSession } from "next-auth";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import NavbarReal from "@/components/ui/RealNav";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className="bg-zinc-950 flex flex-col min-h-screen ">
        <SessionProvider session={session}>
          <NavbarReal />

          {session ? <div>{children}</div> : null}
        </SessionProvider>
      </body>
    </html>
  );
}
