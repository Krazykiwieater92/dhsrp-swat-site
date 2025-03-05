"use client";

import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


export default function TicketForm() {
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      throw new Error("Failed to create ticket.");
    }
    router.refresh();
    router.push("/");
  };
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Staff Application",
  };
  const [formData, setFormData] = useState(startingTicketData);

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
            Staff/Command Application
          </option>
          <option
            value="Recommendation"
            className="bg-zinc-800/60 text-zinc-300 border backdrop-blur"
          >
            Recommendation
          </option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
            className="radio"
          />
          <label>1</label>
        </div>
        <div>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
            className="radio"
          />
          <label>2</label>
        </div>
        <div>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
            className="radio"
          />
          <label>3</label>
        </div>
        <div>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
            className="radio"
          />
          <label>4</label>
        </div>
        <div>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
            className="radio"
          />
          <label>5</label>
        </div>

        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="bg-zinc-800/60 backdrop-blur rounded-lg h-10"
        >
          <option value="not started">Not started</option>
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
