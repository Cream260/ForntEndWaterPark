import type Promotion from "@/type/promotion";
import http from "./axios";

function getPromotion() {
  return http.get("/promotions");
}

function updatePromotion(id: number, promotion: Promotion) {
  return http.patch(`/promotions/${id}`, promotion);
}

function deletePromotion(id: number) {
  return http.delete(`/promotions/${id}`);
}

const getPromotionById = (id:number)=>{
  return http.get(`/promotions/${id}`);
}

export default { getPromotion, updatePromotion, deletePromotion,getPromotionById };
