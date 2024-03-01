import type Order from "@/type/order";
import http from "./axios";
import type OrderItem from "@/type/OrderItem";

function getOrder() {
  return http.get("/orders");
}

function saveOrder(order: {
  cusId: number;
  qty: number;
  totalPrice: number;
  netPrice: number;
  numPeople: number;
  nameComp: string;
  discount: number;
  received: number;
  payments: string;
  startDate: Date;
  expDate: Date;
  orderItems: {
    ticketId: number;
    qty: number;
  }[];
}) {
  return http.post("/orders", order);
}

function updateOrder(id: number, order: Order) {
  return http.patch(`/orders/${id}`, order);
}

function deleteOrder(id: number) {
  return http.delete(`/orders/${id}`);
}

export default { getOrder, saveOrder, updateOrder, deleteOrder };
