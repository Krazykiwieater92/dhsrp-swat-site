"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface FormData {
  title: string;
  description: string;
  priority: number;
  username: string;
  status: string;
  category:
    | "Team Leader Application"
    | "Supervisor Application"
    | "Case Notes"
    | "Recommendation";
}

export default function TicketForm() {
  const router = useRouter();
  const { data: session } = useSession();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    priority: 1,
    username: session?.user?.name || "",
    status: "not started",
    category: "Team Leader Application",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!session?.user?.name) {
      console.error("No user name found in session.");
      return;
    }

    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        console.error("Failed to create ticket. Server error:", errorData);
        throw new Error("Failed to create ticket.");
      }
      router.refresh();
      router.push("/tickets/my-tickets");
    } catch (error) {
      console.error("Failed to create ticket:", error);
    }
  };

  return (
    <div className="flex justify-center mt-30">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold">Create ticket</h3>
        <label>Title</label>
        <Input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
          className="bg-zinc-900/60 backdrop-blur hover:bg-zinc-800/60"
        />
        <label>Description</label>
        <Textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          className="bg-zinc-900/60 backdrop-blur hover:bg-zinc-800/60 resize-none h-30"
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="bg-zinc-800/60 text-zinc-300 backdrop-blur h-10"
        >
          <option value="Staff/Command Application">
            Team Leader Application
          </option>
          <option value="Supervisor Application">Supervisor Application</option>
          <option value="Recommendation">Recommendation</option>
          <option value="Case Notes">Case Notes</option>
        </select>
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="bg-zinc-800/60 backdrop-blur rounded-lg h-10"
        >
          <option value="not started">Not Started</option>
          <option value="in progress">In progress</option>
          <option value="done">Done</option>
        </select>
        <Button
          type="submit"
          variant="outline"
          className="w-full mx-auto"
          value="Create Ticket"
        >
          Create Ticket
        </Button>
      </form>
    </div>
  );
}
//Good looking ticket card for future reference
/*
 <Card className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Create New Ticket</CardTitle>
          <CardDescription>
            Fill out the form below to submit a new ticket
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter ticket title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                placeholder="Describe your issue in detail"
                className="min-h-[120px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Separator className="m-2" />
              <Label>Category</Label>

              <Select required>
                <SelectTrigger
                  id="category"
                  value={formData.category}
                >
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800/60 backdrop-blur">
                  <SelectItem value="recommendation">Recommendation</SelectItem>
                  <SelectItem value="staff-app">Staff App</SelectItem>
                  <SelectItem value="case-notes">Case Notes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full">
              Submit Ticket
            </Button>
          </CardFooter>
        </form>
      </Card> */
