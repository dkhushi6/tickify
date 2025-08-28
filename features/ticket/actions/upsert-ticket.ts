"use server";

import { ticketPath, ticketsPath } from "@/app/path";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
const UpsertTicketSchema = z.object({
  title: z.string().min(1).max(191),
  description: z.string().min(1).max(1024),
  location: z.string().min(1),
  price: z.number(),
});
export const UpsertTicket = async (
  id: string | undefined,
  _actionState: { message: string; payload?: FormData },
  formData: FormData
) => {
  try {
    const data = UpsertTicketSchema.parse({
      title: formData.get("title"),
      description: formData.get("description"),
      location: formData.get("location"),
      price: Number(formData.get("price")),
    });
    await prisma.ticket.upsert({
      where: { id: id || "" },
      update: data,
      create: data,
    });
  } catch {
    return {
      message: "Something went wrong creating message",
      payload: formData,
    };
  }
  revalidatePath(ticketsPath()); // cache update
  if (id) {
    redirect(ticketPath(id));
  }
  return { message: "Ticket created" };
};
