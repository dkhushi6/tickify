import React from "react";
import { getTickets } from "../queries/get-tickets";
import TicketsCard from "./tickets-card";

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <div className="flex justify-center ">
      <div className="flex-1 flex flex-col items-center gap-y-5 animate-fade-in-from-top  ">
        {tickets.map((ticket) => (
          <TicketsCard ticket={ticket} key={ticket.id} />
        ))}
      </div>
    </div>
  );
};

export default TicketList;
