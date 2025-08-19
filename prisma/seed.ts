import { prisma } from "@/lib/prisma";

export const tickets = [
  {
    id: "TCK-001",
    title: "Rock Concert 2025",
    description: "An electrifying night with top rock bands performing live.",
    price: 1200,
    location: "Madison Square Garden, NY",
    status: "open" as const,
  },
  {
    id: "TCK-002",
    title: "Tech Conference 2025",
    description:
      "A gathering of the world's brightest tech minds and innovators.",
    price: 850,
    location: "Moscone Center, San Francisco",
    status: "progress" as const,
  },
  {
    id: "TCK-003",
    title: "Comedy Night Special",
    description: "An evening full of laughter with top stand-up comedians.",
    price: 500,
    location: "Apollo Theater, Chicago",
    status: "done" as const,
  },
  {
    id: "TCK-004",
    title: "Art & Wine Exhibition",
    description: "Enjoy fine art and exquisite wine in a relaxing atmosphere.",
    price: 300,
    location: "Downtown Art Gallery, LA",
    status: "open" as const,
  },
  {
    id: "TCK-005",
    title: "Food Festival 2025",
    description:
      "A feast of flavors featuring international cuisine and street food.",
    price: 150,
    location: "Central Park, NY",
    status: "progress" as const,
  },
  {
    id: "TCK-006",
    title: "Marathon 2025",
    description:
      "Join thousands of runners in this exciting city-wide marathon.",
    price: 80,
    location: "Boston, MA",
    status: "open" as const,
  },
  {
    id: "TCK-007",
    title: "Classical Music Evening",
    description:
      "An elegant evening with performances by world-class orchestras.",
    price: 900,
    location: "Carnegie Hall, NY",
    status: "done" as const,
  },
  {
    id: "TCK-008",
    title: "Startup Pitch Battle",
    description: "Watch emerging startups pitch their ideas to top investors.",
    price: 400,
    location: "Silicon Valley, CA",
    status: "progress" as const,
  },
  {
    id: "TCK-009",
    title: "Fashion Week 2025",
    description: "Experience the latest trends from top designers worldwide.",
    price: 2000,
    location: "Paris, France",
    status: "open" as const,
  },
  {
    id: "TCK-010",
    title: "Science Fair 2025",
    description: "Discover groundbreaking innovations and experiments.",
    price: 100,
    location: "London, UK",
    status: "done" as const,
  },
];

const seed = async () => {
  await prisma.ticket.deleteMany();
  await prisma.ticket.createMany({ data: tickets });
};
seed();
