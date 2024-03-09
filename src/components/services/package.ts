import type Ticket from "@/type/package";
import http from "./axios";

function getPackage() {
  return http.get("/package");
}

function updatePackage(id: number, Package: any) {
  return http.patch(`/Packages/${id}`, Package);
}

function deletePackage(id: number) {
  return http.delete(`/Packages/${id}`);
}

const getPackageById = (id:number)=>{
  return http.get(`/package/${id}`);
}

export default { getPackage, updatePackage, deletePackage, getPackageById};
