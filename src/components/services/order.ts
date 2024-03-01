
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
  orderItems: {
    name: string;
    type: string;
    price: number;
    totalprice: number;
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
// const createCustomer = (data:Ticket & {files:File[]})=>{
//     const formData = new FormData();
//     formData.append("name",data.name);
//     formData.append("point",data.point+'');
//     formData.append("tel",data.tel);
//     formData.append("file",data.files[0]);
//     return http.post("/customers",formData,{headers:{'Content-Type':'multipart/form-data'}});

// }
// const updateCustomer = async (id:string,data:Customer & {files:File[]})=>{
//     const formData = new FormData();
//     formData.append("name",data.name);
//     formData.append("point",data.point+'');
//     formData.append("tel",data.tel);
//     if(data.files){
//         formData.append("file",data.files[0]);
//     }
//     return await http.patch(`/customers/${id}`,formData,{headers:{'Content-Type':'multipart/form-data'}});
// }

// const deleteCustomer = (id:string)=>{
//     return http.delete(`/customers/${id}`);
// }

// const findCustomerBytel = (tel:string)=>{
//     return http.get(`/customers/search/tel/${tel}`);
// }

export default { getOrder, saveOrder, updateOrder, deleteOrder };
