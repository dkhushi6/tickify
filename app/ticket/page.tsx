"use client";
import React, { useEffect, useState } from "react";

import Heading from "@/components/heading";
import TicketsCard from "@/features/ticket/component/tickets-card";
import { TicketProp } from "@/features/ticket/types";
import { getTickets } from "@/features/ticket/queries/get-tickets";
const TicketsPage = () => {
  const [tickets, setTickets] = useState<TicketProp[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getTickets();
      setTickets(res);
    };
    fetchData();
  }, []);
  return (
    <div className="flex-1 flex flex-col gap-y-2">
      <Heading title={"TicketsPage"} desc={"All tickets at one place"} />
      <div className="flex justify-center pt-10">
        <div className="flex-1 flex flex-col items-center gap-y-5 animate-fade-in-from-top  ">
          {tickets.map((ticket) => (
            <TicketsCard ticket={ticket} key={ticket.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;
