import type Ticket from "@/type/ticket";
import http from "./axios";

function getTicket() {
  return http.get("/ticket");
}

function updateTicket(id: number, Ticket: Ticket) {
  return http.patch(`/Tickets/${id}`, Ticket);
}

function deleteTicket(id: number) {
  return http.delete(`/Tickets/${id}`);
}

export default { getTicket, updateTicket, deleteTicket};
