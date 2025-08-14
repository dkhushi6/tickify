import React from "react";
import { tickets } from "../data";
import Link from "next/link";
import { ticketPath } from "@/app/path";
import { LoaderPinwheel, LockKeyhole, LockKeyholeOpen } from "lucide-react";
import clsx from "clsx";
const TicketsPage = () => {
  const TicketIcons = {
    open: <LockKeyholeOpen />,
    done: <LockKeyhole />,
    progress: <LoaderPinwheel />,
  };
  return (
    <div className="">
      <div>
        <div className="text-3xl font-bold tracking-tight">TicketsPage</div>
        <div className="text-muted-foreground text-sm">
          All tickets at one place
        </div>
      </div>

      <div className="flex justify-center pt-10">
        <div className="flex-1 flex flex-col items-center gap-y-5">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className=" px-3 py-2 w-full max-w-[450px]  border rounded-2xl    "
            >
              <div className="flex justify-between">
                <div className="text-lg font-semibold">{ticket.title}</div>
                <div>{TicketIcons[ticket.status]}</div>
              </div>
              <div
                className={clsx("truncate text-muted-foreground", {
                  "line-through": ticket.status === "done",
                })}
              >
                {ticket.description}
              </div>
              <div className="underline text-sm">
                <Link href={ticketPath(ticket.id)}>view</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;
