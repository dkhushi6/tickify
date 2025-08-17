import { initialTiickets } from "@/app/data";
import { TicketProp } from "../types";

export const getTickets = async (): Promise<TicketProp[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return new Promise((resolve) => {
    resolve(initialTiickets);
  });
};
