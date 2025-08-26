import { ticketEditPath, ticketPath } from "@/app/path";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Ticket } from "@prisma/client";
import clsx from "clsx";
import {
  ExternalLink,
  LoaderPinwheel,
  LockKeyhole,
  LockKeyholeOpen,
  LucideTrash,
  Pencil,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { DeleteTicket } from "../actions/delete-ticket";
const TicketIcons = {
  open: <LockKeyholeOpen />,
  done: <LockKeyhole />,
  progress: <LoaderPinwheel />,
};

type TicketProps = { ticket: Ticket; isDetail?: Boolean };

const TicketsCard = ({ ticket, isDetail }: TicketProps) => {
  const detailButton = (
    <Button asChild variant={"outline"}>
      <Link prefetch href={ticketPath(ticket.id)}>
        <ExternalLink />
      </Link>
    </Button>
  );
  const editButton = (
    <Button variant={"outline"}>
      <Link prefetch href={ticketEditPath(ticket.id)}>
        <Pencil className="h-4 w-4" />
      </Link>
    </Button>
  );
  const deleteButton = (
    <form action={DeleteTicket.bind(null, ticket.id)}>
      <Button variant={"outline"}>
        <LucideTrash className="h-4 w-4" />
      </Button>
    </form>
  );
  return (
    <div
      className={clsx("w-full flex space-x-2 ", {
        "max-w-[450px]": !isDetail,
        "max-w-[600px]": isDetail,
      })}
    >
      <Card key={ticket.id} className=" px-3 py-2 w-full  turncate">
        <CardTitle className="flex justify-between pt-2">
          <div className="text-lg font-semibold">{ticket.title}</div>
          <div>{TicketIcons[ticket.status]}</div>
        </CardTitle>
        <CardDescription
          className={clsx(" text-muted-foreground", {
            "line-clamp-2": !isDetail,
          })}
        >
          {ticket.description}
        </CardDescription>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? (
          <>
            {editButton}
            {deleteButton}
          </>
        ) : (
          <>
            {editButton}
            {detailButton}
          </>
        )}{" "}
      </div>
    </div>
  );
};

export default TicketsCard;
