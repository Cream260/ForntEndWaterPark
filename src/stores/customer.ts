import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Customer from '@/type/customer';
import customerService from "@/components/services/customer";

export const useCustomerStore = defineStore("customer", () => {
  const customer = ref<Customer[]>([]);
  async function getCustomer() {
    try {
      const res = await customerService.getCustomer();
      customer.value = res.data;
      console.log(res)

    } catch (e) {
      console.log(e);
    }
  }
  return { customer, getCustomer };
});
