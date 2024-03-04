import type Order from "@/type/order";
import http from "./axios";

function getOrder() {
  return http.get("/orders");
}

function saveOrder(order: Order){

  return http.post("/orders", order);
}

function updateOrder(id: number, order: Order) {
  return http.patch(`/orders/${id}`, order);
}

function deleteOrder(id: number) {
  return http.delete(`/orders/${id}`);
}

//getOrderById
const getOrderById = (id:number)=>{
  return http.get(`/orders/${id}`);
}

export default { getOrder, saveOrder, updateOrder, deleteOrder,getOrderById };
