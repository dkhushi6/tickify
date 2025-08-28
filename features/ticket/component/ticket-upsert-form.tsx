"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";
import { Ticket } from "@prisma/client";
import { UpsertTicket } from "../actions/upsert-ticket";
import { SubmitButton } from "@/components/form/submit-button";
type TicketUpsertFormProp = { ticket?: Ticket };

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProp) => {
  const [actionState, action] = useActionState(
    UpsertTicket.bind(null, ticket?.id),
    { message: "" }
  );

  return (
    <form className="flex flex-col gap-y-2" action={action}>
      <Input type="hidden" id="id" name="id" defaultValue={ticket?.id} />
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        id="title"
        name="title"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <Label htmlFor="description">description</Label>
      <Textarea
        id="description"
        name="description"
        defaultValue={
          (actionState.payload?.get("description") as string) ??
          ticket?.description
        }
      />
      <Label htmlFor="price">Price</Label>
      <Input id="price" name="price" type="number" />{" "}
      <Label htmlFor="location">Location</Label>
      <Input type="location" id="location" name="location" />
      <SubmitButton label={ticket ? "Update" : "Create"} />
      {actionState.message}
    </form>
  );
};

export default TicketUpsertForm;
