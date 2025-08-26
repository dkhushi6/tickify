import React, { Suspense } from "react";

import Heading from "@/components/heading";

import TicketList from "@/features/ticket/component/ticket-list";
import Spinner from "@/components/spinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TicketCreateForm from "@/features/ticket/component/ticket-create-form";
import CardCompact from "@/components/card-compact";
const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title={"TicketsPage"} desc={"All tickets at one place"} />{" "}
      <CardCompact
        title="Create a new Ticket"
        description="New ticket will be generated"
        content={<TicketCreateForm />}
        className="w-full max-w-[600px] self-center"
      />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
