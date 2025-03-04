"use client";
import * as React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MemberList() {
  return (
    <>
      <div className="w-[75%] h-[80%] mx-auto">
        <div className="flex mt-30">
          <Card className="w-50 h-[10%] mx-auto bg-zinc-900 text-zinc-300 border border-zinc-700">
            <CardTitle className="text-center">
              <h1>B. F. Tape</h1>
            </CardTitle>

            <CardDescription className="text-center">
              <h2>Commander,</h2>
              <h2> 10-David</h2>
            </CardDescription>
          </Card>
        </div>
        <div className="flex mt-10">
          <Card className="w-50 h-[10%] mx-auto bg-zinc-900 text-zinc-300 border border-zinc-700">
            <CardHeader className="text-center">
              <h1>TBD...</h1>
            </CardHeader>
            <CardDescription className="text-center">
              <h2>Team Leader,</h2>
              <h2> 50-David</h2>
            </CardDescription>
          </Card>
          <Card className="w-50 h-[10%] mx-auto bg-zinc-900 text-zinc-300 border border-zinc-700">
            <CardHeader className="text-center">
              <h1>TBD...</h1>
            </CardHeader>
            <CardDescription className="text-center">
              <h2>Team Leader,</h2>
              <h2> 40-David</h2>
            </CardDescription>
          </Card>
          <Card className="w-50 h-[10%] mx-auto bg-zinc-900 text-zinc-300 border border-zinc-700">
            <CardHeader className="text-center">
              <h1>TBD...</h1>
            </CardHeader>
            <CardDescription className="text-center">
              <h2>Team Leader,</h2>
              <h2> 30-David</h2>
            </CardDescription>
          </Card>
          <Card className="w-50 h-[10%] mx-auto bg-zinc-900 text-zinc-300 border border-zinc-700">
            <CardHeader className="text-center">
              <h1>TBD...</h1>
            </CardHeader>
            <CardDescription className="text-center">
              <h2>Team Leader,</h2>
              <h2> 20-David</h2>
            </CardDescription>
          </Card>
        </div>
      </div>
    </>
  );
}
