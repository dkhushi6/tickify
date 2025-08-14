import React from "react";
import { tickets } from "../data";

import Heading from "@/components/heading";
import TicketsCard from "@/features/ticket/component/tickets-card";
const TicketsPage = () => {
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
