import type Ticket from "@/stores/type/ticket.ts";
import http from "./axios";




function getTicket() {
    return http.get("/ticket");
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


export default {getTicket}