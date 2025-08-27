import CardCompact from "@/components/card-compact";
import TicketUpsertForm from "@/features/ticket/component/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";
import React from "react";

const TicketEditPage = async ({ params }: { params: { ticketId: string } }) => {
  const resolved = await params;
  const ticket = await getTicket(resolved.ticketId);
  if (!ticket) {
    notFound();
  }
  return (
    <div className="flex flex-1 flex-col justify-center items-center ">
      <CardCompact
        className=" w-full max-w-[600px] animate-fade-in-from-top"
        title="Edit ticket"
        description="Edit an existing ticket"
        content={<TicketUpsertForm ticket={ticket} />}
      />
    </div>
  );
};

export default TicketEditPage;
