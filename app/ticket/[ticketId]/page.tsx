import { tickets } from "@/app/data";
import { ticketsPath } from "@/app/path";
import Placeholder from "@/components/placeholder";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import React from "react";
type TicketParamsProp = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketParamsProp) => {
  const { ticketId } = await params;

  const ticket = await tickets.find((ticket) => ticket.id === ticketId);
  if (!ticket) {
    return (
      <Button asChild variant={"outline"}>
        <Placeholder
          label="Ticket not found"
          button={<Link href={ticketsPath()}>Go to the Tickets</Link>}
        />
      </Button>
    );
  }
  return <div>TicketPage({ticket.id})</div>;
};

export default TicketPage;
