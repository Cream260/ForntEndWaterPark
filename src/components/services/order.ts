import type Order from "@/type/order";
import http from "./axios";

function getOrder() {
  return http.get("/orders");
}

// function saveOrder(order: {
//   orderItems: {
//     name: string;
//     type: string;
//     price: number;
//     totalprice: number;
//     qty: number;
//   }[];
//   recID: number;
//   ticketID: number;
// }) {
//   return http.post("/orders", order);
// }

function saveOrder(order: {
  cusId: number;
  qty: number;
  totalPrice: number;
  netPrice: number;
  discount: number;
  received: number;
  payments: string;
  startDate: string;
  expDate: string;
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
