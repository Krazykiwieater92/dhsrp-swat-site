"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-menubar";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
  return (
    <Card className="w-[30%] mx-auto mt-30 bg-zinc-900/60 border border-zinc-700 backdrop-blur">
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>Edit your profile details here</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Name</Label>
              <Input
                id="name"
                className="placeholder:text-zinc-300/60"
                placeholder={session?.user?.name || ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Rank</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  className="bg-zinc-800/20 backdrop-blur"
                >
                  <SelectItem value="commander">
                    <Badge className="bg-blue-900">Commander</Badge>
                  </SelectItem>
                  <SelectItem value="supervisor">
                    <Badge className="bg-green-950">Supervisor</Badge>
                  </SelectItem>
                  <SelectItem value="team-leader">
                    <Badge className="bg-red-700">Team Leader</Badge>
                  </SelectItem>
                  <SelectItem value="member">
                    <Badge className="bg-gray-500">Member</Badge>
                  </SelectItem>
                  <SelectItem value="trainee">
                    <Badge className="bg-black">Trainee</Badge>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button className="border border-zinc-700">Save</Button>
      </CardFooter>
    </Card>
  );
}
