import type Customer from "@/type/customer";
import http from "./axios";

function getCustomer() {
  return http.get("/customers");
}

function updateCustomer(id: number, Customer: Customer) {
  return http.patch(`/customers/${id}`, Customer);
}

function deleteCustomer(id: number) {
  return http.delete(`/customers/${id}`);
}

export default { getCustomer, updateCustomer, deleteCustomer};
