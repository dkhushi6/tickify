import React from "react";
type TicketParamsProp = {
  params: Promise<{ ticketId: string }>;
};
const TicketPage = async ({ params }: TicketParamsProp) => {
  const ticket = (await params).ticketId;
  return <div>TicketPage({ticket})</div>;
};

export default TicketPage;
