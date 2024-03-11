import type Order from "@/type/order";
import http from "./axios";

function getOrder() {
  return http.get("/orders");
}

function saveOrder(order: Order){
  console.log(JSON.stringify(order));
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

function getOrderQR(id: number) {
  return http.get(`/orders/${id}/qr`);
}

function getEventByOrder(id: number) {
  return http.get(`/orders/${id}/event`);
}

function getPackageByOrder(id: number) {
  return http.get(`/orders/${id}/package`);
}

function getPromotionByOrder(id: number) {
  return http.get(`/orders/${id}/promotion`);
}




export default { getOrder, saveOrder, updateOrder, deleteOrder,getOrderById,getOrderQR ,getEventByOrder, getPackageByOrder,getPromotionByOrder};
