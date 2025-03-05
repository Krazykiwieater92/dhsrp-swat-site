// g:\Web-Projects\swat-site\app\ticketpage\page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      if (!res.ok) {
        console.error("Error creating the ticket", res.statusText);
        return;
      }
      const data = await res.json();
      console.log("Ticket created successfully:", data);
      setTitle(""); //reset the input after the creation.
      setDescription("");
      router.refresh(); // Refresh the data on the page.
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex mt-20 justify-center ">
      <div className="w-full max-w-md">
        <h1 className="font-bold text-4xl text-center mb-8">
          SWAT Leadership Applications
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900/60 backdrop-blur shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-zinc-300 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border border-zinc-700 rounded-lg w-full py-2 px-3 text-zinc-300 leading-tight focus:outline-zinc-700 hover:border-zinc-700"
              id="title"
              type="text"
              placeholder="Ticket Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Description of the issue"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Ticket"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
