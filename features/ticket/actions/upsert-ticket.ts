"use server";

import { ticketsPath } from "@/app/path";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const UpsertTicket = async (
  id: string | undefined,
  formData: FormData
) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const location = formData.get("location");
  const price = formData.get("price");

  const data = {
    title: title ? String(title) : "",
    description: description ? String(description) : "",
    location: location ? String(location) : "",
    price: price ? Number(price) : 0,
  };
  await prisma.ticket.upsert({
    where: { id: id || "" },
    update: data,
    create: data,
  });
  revalidatePath(ticketsPath()); // cache update
  if (id) {
    redirect(ticketsPath());
  }
};
