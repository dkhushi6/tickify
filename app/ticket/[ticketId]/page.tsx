import { initialTiickets } from "@/app/data";
import { ticketsPath } from "@/app/path";
import Placeholder from "@/components/placeholder";
import { Button, buttonVariants } from "@/components/ui/button";
import TicketsCard from "@/features/ticket/component/tickets-card";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import Link from "next/link";
import { notFound } from "next/navigation";

import React from "react";
type TicketParamsProp = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketParamsProp) => {
  const { ticketId } = await params;

  const ticket = await getTicket(ticketId);
  if (!ticket) {
    notFound();
  }
  return (
    <div className="flex items-center  justify-center animate-fade-in-from-top">
      <TicketsCard ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
