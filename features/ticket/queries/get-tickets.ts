import { initialTiickets } from "@/app/data";
import { prisma } from "@/lib/prisma";

export const getTickets = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // return new Promise((resolve) => {
  //   resolve(initialTiickets);
  // });
  return await prisma.ticket.findMany();
};
