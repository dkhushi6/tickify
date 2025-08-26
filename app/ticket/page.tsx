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
const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title={"TicketsPage"} desc={"All tickets at one place"} />
      <Card className="w-full max-w-[600px] self-center">
        {" "}
        <CardHeader>
          <CardTitle>Create a new Ticket</CardTitle>
          <CardDescription>New ticket will be generated</CardDescription>{" "}
        </CardHeader>
        <CardContent>
          <TicketCreateForm />
        </CardContent>
      </Card>
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
