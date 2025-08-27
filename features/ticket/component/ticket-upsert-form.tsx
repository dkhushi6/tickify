"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useTransition } from "react";
import { Ticket } from "@prisma/client";
import { UpsertTicket } from "../actions/upsert-ticket";
import { LucideLoaderCircle } from "lucide-react";
import { useFormState } from "react-dom";
type TicketUpsertFormProp = { ticket?: Ticket };
type LabelProps = {
  label: string;
};
const TicketUpsertForm = ({ ticket }: TicketUpsertFormProp) => {
  const SubmitButton = ({ label }: LabelProps) => {
    const { pending } = useFormState();
    return (
      <Button disabled={pending} type="submit">
        {pending && (
          <LucideLoaderCircle className="mr-2 h-4 w-4 animate-spin" />
        )}
        {label}
      </Button>
    );
  };
  return (
    <form
      className="flex flex-col gap-y-2"
      action={UpsertTicket.bind(null, ticket?.id)}
    >
      <Input type="hidden" id="id" name="id" defaultValue={ticket?.id} />
      <Label htmlFor="title">Title</Label>
      <Input type="text" id="title" name="title" defaultValue={ticket?.title} />
      <Label htmlFor="description">description</Label>
      <Textarea
        id="description"
        name="description"
        defaultValue={ticket?.description}
      />
      <Label htmlFor="price">Price</Label>
      <Input id="price" name="price" type="number" />{" "}
      <Label htmlFor="location">Location</Label>
      <Input type="location" id="location" name="location" />
      <SubmitButton label={ticket ? "Update" : "Create"} />
    </form>
  );
};

export default TicketUpsertForm;
