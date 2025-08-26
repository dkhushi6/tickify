"use server";

import { ticketsPath } from "@/app/path";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const CreateTicket = async (formData: FormData) => {
  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    location: formData.get("location"),
    price: Number(formData.get("price")),
  };
  await prisma.ticket.create({
    data: {
      title: data.title as string,
      description: data.description as string,
      location: data.title as string,
      price: data.price as number,
    },
  });
  revalidatePath(ticketsPath());
};
