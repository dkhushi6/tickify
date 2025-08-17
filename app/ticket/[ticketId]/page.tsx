import { initialTiickets } from "@/app/data";
import { ticketsPath } from "@/app/path";
import Placeholder from "@/components/placeholder";
import { Button, buttonVariants } from "@/components/ui/button";
import TicketsCard from "@/features/ticket/component/tickets-card";
import Link from "next/link";

import React from "react";
type TicketParamsProp = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketParamsProp) => {
  const { ticketId } = await params;

  const ticket = await initialTiickets.find((ticket) => ticket.id === ticketId);
  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant={"outline"}>
            <Link href={ticketsPath()}>Go to the Tickets</Link>
          </Button>
        }
      />
    );
  }
  return (
    <div className="flex items-center justify-center animate-fade-in-from-top">
      <TicketsCard ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
