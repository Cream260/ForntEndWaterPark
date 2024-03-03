import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Customer from '@/type/customer';
import customerService from "@/components/services/customer";

export const useCustomerStore = defineStore("customer", () => {
  const customer = ref<Customer[]>([]);
  const currentUser = ref<Customer>({ 
    name: "ธนาวุฒิ รอดเจริญ", 
    email: "64160049@buu.ac.th", 
    tel: "0922757567" 
  });

  async function getCustomer() {
    try {
      const res = await customerService.getCustomer();
      customer.value = res.data;
      console.log(res)

    } catch (e) {
      console.log(e);
    }
  }
  return { customer, currentUser, getCustomer };
});
