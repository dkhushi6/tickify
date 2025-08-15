export type TicketStatusProps = {
  status: "done" | "open" | "progress";
};
export type TicketProp = {
  title: string;
  id: string;
  description: string;
  status: "done" | "open" | "progress";
};
