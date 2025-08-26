import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { CreateTicket } from "../actions/create-ticket";

const TicketCreateForm = () => {
  return (
    <form className="flex flex-col gap-y-2" action={CreateTicket}>
      <Label htmlFor="title">Title</Label>
      <Input type="text" id="title" name="title" />
      <Label htmlFor="description">description</Label>
      <Textarea id="description" name="description" />
      <Label htmlFor="price">Price</Label>
      <Input id="price" name="price" type="number" />{" "}
      <Label htmlFor="location">Location</Label>
      <Input type="location" id="location" name="location" />
      <Button type="submit">Create</Button>
    </form>
  );
};

export default TicketCreateForm;
