import { initialTiickets } from "@/app/data";
import { TicketProp } from "../types";

export const getTicket = async (
  ticketId: string
): Promise<TicketProp | null> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const maybeTicket = await initialTiickets.find(
    (ticket) => ticket.id === ticketId
  );
  return new Promise((resolve) => resolve(maybeTicket || null));
};
