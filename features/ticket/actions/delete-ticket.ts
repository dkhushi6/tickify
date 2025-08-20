"use server";
import { ticketsPath } from "@/app/path";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const DeleteTicket = async (id: string) => {
  await prisma.ticket.delete({ where: { id } });
  redirect(ticketsPath());
};
