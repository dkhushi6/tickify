import { ticketPath } from "@/app/path";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import {
  ExternalLink,
  LoaderPinwheel,
  LockKeyhole,
  LockKeyholeOpen,
} from "lucide-react";
import Link from "next/link";
import React from "react";
const TicketIcons = {
  open: <LockKeyholeOpen />,
  done: <LockKeyhole />,
  progress: <LoaderPinwheel />,
};
type Ticket = {
  title: string;
  id: string;
  description: string;
  status: "done" | "open" | "progress";
};
type TicketProps = { ticket: Ticket };

const TicketsCard = ({ ticket }: TicketProps) => {
  const detailButton = (
    <Button asChild variant={"outline"}>
      <Link href={ticketPath(ticket.id)}>
        <ExternalLink />
      </Link>
    </Button>
  );
  return (
    <div className="w-full max-w-[450px] flex space-x-2">
      <Card key={ticket.id} className=" px-3 py-2 w-full  turncate     ">
        <CardTitle className="flex justify-between pt-2">
          <div className="text-lg font-semibold">{ticket.title}</div>
          <div>{TicketIcons[ticket.status]}</div>
        </CardTitle>
        <CardDescription
          className={clsx("line-clamp-2 text-muted-foreground", {
            "line-through": ticket.status === "done",
          })}
        >
          {ticket.description}
        </CardDescription>
      </Card>
      <div className="flex flex-col gap-y-1">
        {detailButton}
        {detailButton}
        {detailButton}
      </div>
    </div>
  );
};

export default TicketsCard;
