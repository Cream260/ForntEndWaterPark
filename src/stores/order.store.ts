import orderService from '@/components/services/order'
import type Order from './type/order'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore("order", () => {
  const orders = ref<Order[]>([])
  async function getOrder() {
    try {
      const res = await orderService.getOrder();
      orders.value = res.data;

    } catch (e) {
      console.log(e);
    }
  }

  return { orders, getOrder };
});
