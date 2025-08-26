import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Ticket } from "@prisma/client";
import { UpdateTicket } from "../actions/update-ticket";

const TicketUpdateForm = ({ ticket }: { ticket: Ticket }) => {
  return (
    <form
      className="flex flex-col gap-y-2"
      action={UpdateTicket.bind(null, ticket.id)}
    >
      <Input type="hidden" id="id" name="id" defaultValue={ticket.id} />
      <Label htmlFor="title">Title</Label>
      <Input type="text" id="title" name="title" defaultValue={ticket.title} />
      <Label htmlFor="description">description</Label>
      <Textarea
        id="description"
        name="description"
        defaultValue={ticket.description}
      />
      <Label htmlFor="price">Price</Label>
      <Input id="price" name="price" type="number" />{" "}
      <Label htmlFor="location">Location</Label>
      <Input type="location" id="location" name="location" />
      <Button type="submit">Update</Button>
    </form>
  );
};

export default TicketUpdateForm;
