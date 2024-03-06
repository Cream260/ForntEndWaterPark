import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Promotion from '@/type/promotion';
import promotionService from "@/components/services/promotion";

export const usePromotionStore = defineStore("promotion", () => {
  const promotions = ref<Promotion[]>([])
  const promotion = ref<Promotion>();
  
  async function getPromotion() {
    try {
      const res = await promotionService.getPromotion();
      promotions.value = res.data;
      console.log(res)

    } catch (e) {
      console.log(e);
    }
  }

  async function getPromotionById(id: number) {
    try {
      const res = await promotionService.getPromotionById(id);
      console.log(res);
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  return {  getPromotion ,promotions, getPromotionById};
});
