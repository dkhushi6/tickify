import { initialTiickets } from "@/app/data";
import { prisma } from "@/lib/prisma";

export const getTicket = async (ticketId: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // const maybeTicket = await initialTiickets.find(
  //   (ticket) => ticket.id === ticketId
  // );
  // return new Promise((resolve) => resolve(maybeTicket || null));
  return await prisma.ticket.findUnique({
    where: { id: ticketId },
  });
};
