import React from "react";
import { tickets } from "../data";
import Link from "next/link";
import { ticketPath } from "@/app/path";
const TicketsPage = () => {
  return (
    <div className="">
      <div>TicketsPage</div>

      <div className="flex justify-center pt-10">
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex-1 flex flex-col px-3 py-2 w-full max-w-[450px]  border rounded-2xl    "
            >
              <div className="text-lg font-semibold">{ticket.title}</div>
              <div className="truncate text-muted-foreground">
                {ticket.description}
              </div>
              <div className="underline">
                <Link href={`/ticket/${ticket.id}`}>view</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;
