import type Package from "@/type/package" ;
import http from "./axios";

function getPackage() {
  return http.get("/package");
}

function updatePackage(id: number, Package: Package) {
  return http.patch(`/package/${id}`, Package);
}

function deletePackage(id: number) {
  return http.delete(`/package/${id}`);
}
const getPackageById = (id:number)=>{
  return http.get(`/package/${id}`);
}

function savePackage(packageData: Package){
  console.log(JSON.stringify(packageData));
  return http.post("/package", packageData);
}



export default { getPackage, updatePackage, deletePackage,savePackage,getPackageById};

