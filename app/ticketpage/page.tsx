// g:\Web-Projects\swat-site\app\ticketpage\page.tsx
"use client";


import TicketForm from "@/components/EditTicketForm";

export default function Page() {
  return <TicketForm />;
}

/* return (
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
*/
