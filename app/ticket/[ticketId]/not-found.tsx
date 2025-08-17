import { ticketsPath } from "@/app/path";
import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <Placeholder
      label="Ticket not found"
      button={
        <Button asChild variant={"outline"}>
          <Link href={ticketsPath()}>Go to the Tickets</Link>
        </Button>
      }
    />
  );
}
