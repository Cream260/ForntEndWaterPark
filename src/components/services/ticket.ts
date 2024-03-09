import type Ticket from "@/type/ticket";
import http from "./axios";

function getTickets() {
  return http.get("/ticket");
}

function updateTicket(id: number, Ticket: Ticket) {
  return http.patch(`/ticket/${id}`, Ticket);
}

function deleteTicket(id: number) {
  return http.delete(`/ticket/${id}`);
}

export default { getTickets, updateTicket, deleteTicket};
