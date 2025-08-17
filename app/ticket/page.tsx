import React, { Suspense } from "react";

import Heading from "@/components/heading";

import TicketList from "@/features/ticket/component/ticket-list";
import Spinner from "@/components/spinner";
const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-2">
      <Heading title={"TicketsPage"} desc={"All tickets at one place"} />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
